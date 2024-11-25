"use server";

import { signIn, signOut } from "@/auth";

export const socialLogin = async (formData: FormData) => {
  const action = formData.get("action");

  await signIn(action as string, { redirectTo: "/dashboard" });
};

export const logOut = async () => {
  await signOut({ redirectTo: "/" });
};

export const credentialLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const response = await signIn("credentials", {
      email,
      password,
      redirectTo: "/dashboard",
    });

    return response;
  } catch (error) {
    throw error;
  }
};
