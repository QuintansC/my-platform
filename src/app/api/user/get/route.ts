import { getUserByEmail } from "../UserModel";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email") || "";
  const result = await getUserByEmail(email);

  return NextResponse.json({
    message: "Task Buscada com sucesso",
    user: result,
  });
}
