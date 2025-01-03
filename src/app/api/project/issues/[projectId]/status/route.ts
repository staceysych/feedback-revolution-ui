import { NextResponse } from "next/server";
import { auth } from "@/auth";
import connectDB from "@/app/api/config/database";
import { updateIssueStatus } from "@/app/api/project/issues/queries";

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
    await updateIssueStatus(projectId, data.issueId, data.status);

    return new Response(JSON.stringify({ success: "All good" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
