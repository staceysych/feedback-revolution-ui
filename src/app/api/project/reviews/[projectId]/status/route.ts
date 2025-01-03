import { NextResponse } from "next/server";
import { auth } from "@/auth";
import connectDB from "@/app/api/config/database";
import {
  getActiveReviews,
  updateReviewStatus,
} from "@/app/api/project/reviews/queries";

export async function POST(
  request: Request,
  { params }: { params: { projectId: string } }
) {
  const session = await auth();
  if (!session?.user) {
    return new NextResponse("You are not authenticated", { status: 401 });
  }

  await connectDB();
  try {
    const projectId = (await params).projectId;
    const data = await request.json();
    await updateReviewStatus(projectId, data.reviewId, data.status);

    return new Response(JSON.stringify({ success: "All good" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}

export const GET = async (
  _request: Request,
  { params }: { params: Promise<{ projectId: string }> }
) => {
  await connectDB();

  try {
    const projectId = (await params).projectId;

    const allData = await getActiveReviews(projectId);

    return new Response(JSON.stringify({ data: allData }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
};
