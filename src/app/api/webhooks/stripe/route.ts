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

  // Handle the event
  try {
    switch (event.type) {
      case "checkout.session.completed":
        const session = await stripe.checkout.sessions.retrieve(
          (event.data.object as Stripe.Checkout.Session).id,
          {
            expand: ["line_items"],
          }
        );
        const customerId = session.customer as string;
        const customerDetails = session.customer_details;

        if (customerDetails?.email) {
          const user = await User.findOne({ email: customerDetails.email });
          if (!user) throw new Error("User not found");

          if (!user.customerId) {
            await User.updateOne(
              { email: customerDetails.email },
              { customerId: customerId }
            );
          }

          const lineItems = session.line_items?.data || [];

          for (const item of lineItems) {
            const priceId = item.price?.id;
            const isSubscription = item.price?.type === "recurring";

            if (isSubscription) {
              let endDate = new Date();
              let tier = Tier.Standard; // Default to Standard tier

              // Determine subscription duration and tier
              if (priceId === process.env.STRIPE_YEARLY_PRICE_ID!) {
                endDate.setFullYear(endDate.getFullYear() + 1); // 1 year from now
              } else if (priceId === process.env.STRIPE_STANDARD_MONTHLY_PRICE_ID!) {
                endDate.setMonth(endDate.getMonth() + 1); // 1 month from now
                tier = Tier.Standard;
              } else if (priceId === process.env.STRIPE_PRO_MONTHLY_PRICE_ID!) {
                endDate.setMonth(endDate.getMonth() + 1); // 1 month from now
                tier = Tier.Pro;
              } else {
                throw new Error("Invalid priceId");
              }

              // Update user's tier and subscription details
              await User.updateOne(
                { email: customerDetails.email },
                { 
                  tier: tier,
                  subscriptionStart: new Date(),
                  subscriptionEnd: endDate,
                  subscriptionPeriod: priceId === process.env.STRIPE_YEARLY_PRICE_ID! ? "yearly" : "monthly"
                }
              );
            }
          }
        }
        break;

      case "customer.subscription.deleted": {
        const subscription = await stripe.subscriptions.retrieve(
          (event.data.object as Stripe.Subscription).id
        );
        const user = await User.findOne({ 
          customerId: subscription.customer as string 
        });

        if (user) {
          await User.updateOne(
            { customerId: subscription.customer as string },
            { tier: Tier.Test }
          );
        } else {
          console.error("User not found for the subscription deleted event.");
          throw new Error("User not found for the subscription deleted event.");
        }
        break;
      }

      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  } catch (error) {
    console.error("Error handling event", error);
    return new Response("Webhook Error", { status: 400 });
  }

  return new Response("Webhook received", { status: 200 });
}
