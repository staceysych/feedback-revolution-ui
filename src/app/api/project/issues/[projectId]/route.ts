import { submitIssue } from "@/app/api/project/issues/issuesUtils";

export const POST = async (
  request: Request,
  { params }: { params: Promise<{ projectId: string }> }
) => {
  try {
    const projectId = (await params).projectId;
    const data = await request.json();
    await submitIssue(projectId, data.issueData);

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
