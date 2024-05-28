import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./prisma";

export const { auth, handlers } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GoogleProvider],
});
