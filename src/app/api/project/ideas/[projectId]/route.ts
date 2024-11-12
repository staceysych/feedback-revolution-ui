import {
  submitIdea,
  updateIdeaVotes,
  getAllIdeas,
} from "@/app/api/project/ideas/ideasUtils";

import { NextRequest, NextResponse } from "next/server";

export const POST = async (
  request: NextRequest,
  { params }: { params: Promise<{ projectId: string }> }
) => {
  try {
    const projectId = (await params).projectId;
    const data = await request.json();
    await submitIdea(projectId, data.ideaData);

    return new NextResponse(JSON.stringify({ success: "All good" }), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
      }
    );
  }
};

export const PATCH = async (
  request: NextRequest,
  { params }: { params: Promise<{ projectId: string }> }
) => {
  try {
    const { projectId } = await params;

    const data = await request.json();

    if (typeof data.votes !== "number") {
      return new NextResponse(
        JSON.stringify({ error: "Votes field must be a number" }),
        { status: 400 }
      );
    }

    await updateIdeaVotes(projectId, data.ideaId, data.votes);

    return new NextResponse(JSON.stringify({ success: "Votes updated" }), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
      }
    );
  }
};

export const GET = async (
  _request: NextRequest,
  { params }: { params: Promise<{ projectId: string }> }
) => {
  try {
    const projectId = (await params).projectId;

    const allData = await getAllIdeas(projectId);

    return new NextResponse(JSON.stringify({ data: allData }), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
      }
    );
  }
};
