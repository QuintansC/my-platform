import { getUserByEmail } from "../UserModel";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const email = "";
  console.log(request);

  const result = await getUserByEmail(email);

  return NextResponse.json({
    message: "Task Buscada com sucesso",
    task: result,
  });
}
