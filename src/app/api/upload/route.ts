import { updateUser } from "../user/UserModel";
import { uploadFile } from "./image/image";
import { NextResponse } from "next/server";

export async function POST(req: NextResponse) {
  const { fileName, fileContent, userLogged } = await req.json();

  try {
    const urlComplete = `https://pub-10cf4bd62e35457db881bc576d2d281a.r2.dev/my-platform-gustavo/${fileName}`;
    await updateUser(userLogged, {
      image: urlComplete,
    });
    await uploadFile(fileName, Buffer.from(fileContent, "base64"));
    return NextResponse.json({
      urlComplete: urlComplete,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Failed upload",
    });
  }
}
