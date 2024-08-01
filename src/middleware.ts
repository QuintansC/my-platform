import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const session = request.cookies.get("next-auth.session-token");
  if (session) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  } else {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }
}

export const config = {
  matcher: "/",
};
