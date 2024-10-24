import { submitReview } from "@/app/api/project/reviews/reviewsUtils";

export const POST = async (
  request: Request,
  { params }: { params: Promise<{ projectId: string }> }
) => {
  try {
    const projectId = (await params).projectId;
    const data = await request.json();
    await submitReview(projectId, data.reviewData);

    return new Response(JSON.stringify({ success: "All good" }), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
};
