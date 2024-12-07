import {
  getWaitListCount,
  postWaitListEmail,
} from "@/app/api/waitlist/queries";
import connectDB from "@/app/api/config/database";

export const POST = async (request: Request) => {
  await connectDB();
  try {
    const data = await request.json();
    const { err } = await postWaitListEmail(data.email);

    if (err === 11000) {
      return new Response(JSON.stringify({ error: "Email already exists" }), {
        status: 400,
      });
    }

    return new Response(JSON.stringify({ success: "All good" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
};

export const GET = async () => {
  await connectDB();
  try {
    const count = await getWaitListCount();
    return new Response(JSON.stringify({ count }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
};
