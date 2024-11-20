import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";

import User from "@/app/api/models/userModel";
import bcrypt from "bcrypt";

import { authConfig } from "./auth.config";
import connectDB from "@/app/api/config/database";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    CredentialProvider({
      async authorize(credentials) {
        if (credentials === null) return null;
        try {
          await connectDB();

          const user = await User.findOne({ email: credentials.email });

          if (user) {
            const isMatch = await bcrypt.compare(
              credentials.password as string,
              user.password
            );

            if (isMatch) {
              return user;
            } else {
              throw new Error("Password does not match");
            }
          } else {
            throw new Error("No user found");
          }
        } catch (error) {
          throw new Error(
            error instanceof Error ? error.message : String(error)
          );
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,

      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        try {
          await connectDB();

          const userExists = await User.findOne({
            email: profile?.email,
          });

          if (!userExists) {
            await User.create({
              email: profile?.email,
              userName: profile?.name,
            });
          }
          return true;
        } catch (error) {
          return false;
        }
      }

      return true;
    },
  },
});
