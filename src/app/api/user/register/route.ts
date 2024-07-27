import { createUser, getUserByEmail } from "../UserModel";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const result = await request.json();

  const userExists = await getUserByEmail(result.data.email);
  if (!userExists) {
    const cadastrar = await createUser(result.data);
    return NextResponse.json(cadastrar);
  } else {
    return new NextResponse(
      JSON.stringify({
        message: "User already exists",
      }),
      {
        status: 302,
        statusText: "Usuario já existe na base",
      },
    );
  }
}
