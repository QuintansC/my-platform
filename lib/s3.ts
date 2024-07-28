import { S3Client } from "@aws-sdk/client-s3";

const REGION = "us-east-1"; // Altere para a região do seu bucket R2
const ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID as string;
const SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY as string;

const s3Client = new S3Client({
  region: REGION,
  endpoint:
    "https://777313dc541b6031382f10c430096e71.r2.cloudflarestorage.com/my-platform-gustavo",
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
});

export default s3Client;
