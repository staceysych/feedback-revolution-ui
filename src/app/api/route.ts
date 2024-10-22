import { postWaitListEmail } from "@/app/api/waitList";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { err } = await postWaitListEmail(data.email);

    console.log({ err });
    return err
      ? new Response(JSON.stringify({ error: "Email already exists" }), {
          status: 400,
        })
      : new Response(JSON.stringify({ success: "All good" }), {
          status: 200,
        });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
