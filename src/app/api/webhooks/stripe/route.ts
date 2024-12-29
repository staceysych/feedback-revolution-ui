import { stripe } from "@/app/lib/stripe";
import Stripe from "stripe";
import User from "@/app/api/models/userModel";
import { Tier } from "@/app/types/user";

const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, WEBHOOK_SECRET);
  } catch (err: any) {
    console.error("Webhook signature verification failed.", err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  try {
    switch (event.type) {
      // Handle initial subscription purchase via payment link
      case "checkout.session.completed": {
        const session = await stripe.checkout.sessions.retrieve(
          (event.data.object as Stripe.Checkout.Session).id,
          {
            expand: ["line_items"],
          }
        );

        const customerId = session.customer as string;
        const customerEmail = session.customer_details?.email;

        if (!customerEmail) {
          throw new Error("No customer email found in session");
        }

        const user = await User.findOne({ email: customerEmail });
        if (!user) {
          throw new Error("User not found");
        }

        // Get subscription details from line items
        const lineItems = session.line_items?.data || [];
        const subscriptionItem = lineItems.find(item => item.price?.type === "recurring");
        
        if (!subscriptionItem?.price?.id) {
          throw new Error("No subscription price found in session");
        }

        const priceId = subscriptionItem.price.id;
        let tier = Tier.Standard;
        let endDate = new Date();

        // Set subscription details based on the plan
        if (priceId === process.env.STRIPE_PRO_MONTHLY_PRICE_ID!) {
          tier = Tier.Pro;
          endDate.setMonth(endDate.getMonth() + 1);
        } else if (priceId === process.env.STRIPE_STANDARD_MONTHLY_PRICE_ID!) {
          tier = Tier.Standard;
          endDate.setMonth(endDate.getMonth() + 1);
        } else {
          throw new Error("Invalid price ID");
        }

        // Update user with subscription details
        await User.updateOne(
          { email: customerEmail },
          {
            customerId,
            tier,
            subscriptionStart: new Date(),
            subscriptionEnd: endDate,
            subscriptionPeriod: priceId === process.env.STRIPE_YEARLY_PRICE_ID! ? "yearly" : "monthly"
          }
        );
        break;
      }

      // Handle subscription updates via Customer Portal
      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        const priceId = subscription.items.data[0]?.price.id;
        
        if (!priceId) {
          throw new Error("No price ID found in subscription");
        }

        const user = await User.findOne({ 
          customerId: subscription.customer as string 
        });

        if (!user) {
          throw new Error("User not found for subscription update");
        }

        // Determine new tier based on price ID
        let tier = Tier.Standard;
        if (priceId === process.env.STRIPE_PRO_MONTHLY_PRICE_ID!) {
          tier = Tier.Pro;
        } else if (priceId !== process.env.STRIPE_STANDARD_MONTHLY_PRICE_ID!) {
          throw new Error("Invalid price ID");
        }

        // Update subscription details
        await User.updateOne(
          { customerId: subscription.customer as string },
          {
            tier,
            subscriptionEnd: new Date(subscription.current_period_end * 1000),
            subscriptionPeriod: subscription.items.data[0]?.price.recurring?.interval === "year" ? "yearly" : "monthly"
          }
        );
        break;
      }

      // Handle subscription cancellations
      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const user = await User.findOne({ 
          customerId: subscription.customer as string 
        });

        if (!user) {
          throw new Error("User not found for subscription cancellation");
        }

        // Reset user to Test tier, archive customerId, and clear subscription details
        await User.updateOne(
          { customerId: subscription.customer as string },
          {
            tier: Tier.Test,
            subscriptionEnd: null,
            subscriptionStart: null,
            subscriptionPeriod: null,
            $addToSet: { archivedCustomerIds: user.customerId },
            customerId: null
          }
        );
        break;
      }

      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  } catch (error) {
    console.error("Error handling webhook event:", error);
    return new Response("Webhook Error", { status: 400 });
  }

  return new Response("Webhook processed successfully", { status: 200 });
}
