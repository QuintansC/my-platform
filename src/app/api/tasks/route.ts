import { createTask, getTaskById } from "./TasksModel";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { data }: any = await request.json();

  const userExists = await getTaskById(data.email);
  if (!userExists) {
    const cadastrar = await createTask(data);
    return NextResponse.json(cadastrar);
  } else {
    return new NextResponse(
      JSON.stringify({
        message: "Task já existems",
      }),
      {
        status: 302,
        statusText: "Usuario já existe na base",
      },
    );
  }
}
