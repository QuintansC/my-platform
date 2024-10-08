import { createUser, getUserByEmail, Users } from "../UserModel";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { data }: any = await request.json();

  const userExists = await getUserByEmail(data.email);
  if (!userExists) {
    const cadastrar = await createUser(data);
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
