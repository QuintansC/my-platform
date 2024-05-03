import { createTask } from "../TasksModel";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const task = await createTask(data);

  return NextResponse.json({
    message: "Task criada com sucesso",
    task,
  });
}
