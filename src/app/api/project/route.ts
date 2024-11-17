import { NextResponse } from "next/server";

import { createProject } from "@/app/api/project/queries";
import { addProjectIdToUser } from "@/app/api/user/queries";
import connectDB from "@/app/api/config/database";
import { auth } from "@/auth";

export const POST = async () => {
  const session = await auth();
  if (!session?.user) {
    return new NextResponse("You are not authenticated", { status: 401 });
  }

  await connectDB();

  try {
    const projectId = await createProject();
    await addProjectIdToUser(session.user.email || "", projectId);

    return new NextResponse("Project created successfully", { status: 201 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
};
