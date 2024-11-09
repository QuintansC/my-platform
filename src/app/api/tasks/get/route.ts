import { getTaskByEmailStatus } from "../TasksModel";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email") || "";
  const status = request.nextUrl.searchParams.get("status") || "";
  const result = await getTaskByEmailStatus(status);

  return NextResponse.json({
    message: "Task Buscada com sucesso",
    task: result,
  });
}
