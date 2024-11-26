import { NextResponse, NextRequest } from "next/server";
import { authConfig } from "./auth.config";

import NextAuth from "next-auth";
import { PRIVATE_ROUTES, ROOT, SING_IN } from "@/app/utils/defaults";

const { auth } = NextAuth(authConfig);

export const middleware = async (req: NextRequest) => {
  const { nextUrl } = req;

  const session = await auth();

  const isAuthenticated = !!session?.user;
  const isPublicRoute = !PRIVATE_ROUTES.some((route) =>
    nextUrl.pathname.startsWith(route)
  );

  if (!isAuthenticated && !isPublicRoute) {
    return NextResponse.redirect(new URL(SING_IN, nextUrl));
  }
};

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
