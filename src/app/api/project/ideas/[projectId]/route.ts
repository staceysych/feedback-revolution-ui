import { submitIdea } from "@/app/api/project/ideas/ideasUtils";
import { HEADERS } from "@/app/utils";

export const POST = async (
  request: Request,
  { params }: { params: Promise<{ projectId: string }> }
) => {
  try {
    const projectId = (await params).projectId;
    const data = await request.json();
    await submitIdea(projectId, data.ideaData);

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