import NextAuth from "next-auth/next"
import GithubProviders from "next-auth/providers/github"

import GoogleProviders from "next-auth/providers/google"


const handler = NextAuth({
    pages: {
        signIn: "/auth/signin",
    },
    providers: [
        GithubProviders({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ??""
        }),

        GoogleProviders({
            clientId: process.env.GOOGLE_ID ?? "",
            clientSecret: process.env.GOOGLE_SECRET ??""
        })
    ]
})

export{ handler as GET, handler as POST, handler as PUT, handler as DELETE, handler}