"use server";

import { BASE_URL, WAITLIST_API } from "@/app/utils";
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

export const getWaitListCount = async () => {
  try {
    const response = await fetch(`${BASE_URL}${WAITLIST_API}`, {
      method: "GET",
    });
    const data = await response.json();
    return data.count;
  } catch (error) {
    console.error(error);
  }
};
