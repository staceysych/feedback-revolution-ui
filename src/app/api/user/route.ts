import { auth } from "@/auth";
import { NextResponse } from "next/server";
import connectDB from "@/app/api/config/database";

import { findUserByEmail } from "./queries";

export const GET = async () => {
  const session = await auth();

  if (!session?.user) {
    return new NextResponse("You are not authenticated", { status: 401 });
  }

  await connectDB();

  try {
    const user = await findUserByEmail(session.user.email || "");

    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
};
