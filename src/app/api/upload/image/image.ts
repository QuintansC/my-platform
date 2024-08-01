import {
  PutObjectCommand,
  PutObjectCommandInput,
  PutObjectCommandOutput,
} from "@aws-sdk/client-s3";
import s3Client from "../../../../../lib/s3";

export const uploadFile = async (
  fileName: string,
  fileContent: Buffer,
): Promise<PutObjectCommandOutput> => {
  const params: PutObjectCommandInput = {
    Bucket: "my-platform-gustavo",
    Key: fileName,
    Body: fileContent,
  };

  try {
    const data = await s3Client.send(new PutObjectCommand(params));
    return data;
  } catch (err) {
    throw err;
  }
};
