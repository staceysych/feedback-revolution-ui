import { submitIssue } from "@/app/api/project/issues/queries";
import connectDB from "@/app/api/config/database";

export const POST = async (
  request: Request,
  { params }: { params: Promise<{ projectId: string }> }
) => {
  await connectDB();
  try {
    const projectId = (await params).projectId;
    const data = await request.json();
    await submitIssue(projectId, data.issueData);

    return new Response(JSON.stringify({ success: "All good" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
};
