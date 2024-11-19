import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

import { createUser, findUserByEmail } from "@/app/api/user/queries";
import connectDB from "@/app/api/config/database";

export const POST = async (req: NextRequest) => {
  const { email, password, userName } = await req.json();

  await connectDB();

  const hashedPassword = await bcrypt.hash(password, 5);

  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    return new NextResponse("User already exists", {
      status: 409,
    });
  }

  const newUser = {
    email,
    password: hashedPassword,
    userName,
  };

  try {
    await createUser(newUser);
  } catch (error: any) {
    return new NextResponse("User creation failed", {
      status: 500,
    });
  }

  return new NextResponse("User created successfully", {
    status: 201,
  });
};
