import { getUserByEmail } from "../UserModel";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const result = await getUserByEmail();

  return NextResponse.json({
    message: "User Buscado com sucesso",
    user: result,
  });
}
