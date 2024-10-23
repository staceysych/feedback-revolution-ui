import { postWaitListEmail } from "@/app/api/waitList";

export const POST = async (request: Request) => {
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
