import {
  getAllReviews,
  submitReview,
} from "@/app/api/project/reviews/reviewsUtils";
import { HEADERS } from "@/app/utils";

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
      headers: HEADERS,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
};

export const GET = async (
  _request: Request,
  { params }: { params: Promise<{ projectId: string }> }
) => {
  try {
    const projectId = (await params).projectId;

    const allData = await getAllReviews(projectId);

    return new Response(JSON.stringify({ data: allData }), {
      status: 200,
      headers: HEADERS,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
};