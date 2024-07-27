import NextAuth from "next-auth/next";
import GithubProviders from "next-auth/providers/github";

import GoogleProviders from "next-auth/providers/google";

import CredentialsProviders from "next-auth/providers/credentials";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../../../lib/prisma";

const handler = NextAuth({
  pages: {
    signIn: "/auth/signin",
    error: "/auth/signin",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProviders({
      name: "login",
      credentials: {
        email: { label: "email", type: "email ", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });

        if (user && user.password === credentials?.password) {
          return user;
        }
        return null;
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

  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt", maxAge: 24 * 60 * 60 },

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 60 * 60 * 24 * 30,
  },

  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },

    async session({ session, token, user }) {
      return session;
    },

    async jwt({ token, account }) {
      if (account) {
        token.access_token = account.access_token;
      }

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
