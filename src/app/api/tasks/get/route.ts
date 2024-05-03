import { getTaskById } from "../TasksModel";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const data = request.nextUrl.searchParams.get("id") || "";
  const result = await getTaskById(data);

  return NextResponse.json({
    message: "Task Buscada com sucesso",
    task: result,
  });
}
