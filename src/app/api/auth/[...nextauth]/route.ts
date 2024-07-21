import NextAuth from "next-auth/next";
import GithubProviders from "next-auth/providers/github";

import GoogleProviders from "next-auth/providers/google";

import CredentialsProviders from "next-auth/providers/credentials";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../../../lib/prisma";

import { cookies } from "next/headers";

const handler = NextAuth({
  pages: {
    signIn: "/auth/signin",
    error: "/auth/signin",
  },
  providers: [
    CredentialsProviders({
      id: "credentials",
      name: "credentials",
      async authorize(credentials, req) {
        const userCredentials = {
          email: credentials?.email,
          password: credentials?.password,
        };

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/user/login`,
          {
            method: "POST",
            body: JSON.stringify(userCredentials),
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        const user = await res.json();

        if (res.ok && user) {
          return user;
        } else {
          return null;
        }
      },
      credentials: {
        email: { label: "email", type: "email ", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
    }),
    GithubProviders({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),

    GoogleProviders({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  adapter: PrismaAdapter(prisma),

  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt", maxAge: 24 * 60 * 60 },

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 60 * 60 * 24 * 30,
  },

  callbacks: {
    async session({ session, user }) {
      if (session !== null) {
        //cookies().set("userLogged", JSON.stringify(session.user));
      }
      return session;
    },

    async jwt({ token, user }) {
      return token;
    },
  },
});

export {
  handler as GET,
  handler as POST,
  handler as PUT,
  handler as DELETE,
  handler,
};
