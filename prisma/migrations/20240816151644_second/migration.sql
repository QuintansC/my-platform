/*
  Warnings:

  - You are about to drop the column `draggableId` on the `Tasks` table. All the data in the column will be lost.
  - You are about to drop the column `draggableId` on the `VerificationRequest` table. All the data in the column will be lost.
  - You are about to drop the column `index` on the `VerificationRequest` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[token]` on the table `VerificationRequest` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `identifier` to the `VerificationRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `token` to the `VerificationRequest` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Tasks_draggableId_key";

-- DropIndex
DROP INDEX "VerificationRequest_draggableId_key";

-- AlterTable
ALTER TABLE "Tasks" DROP COLUMN "draggableId";

-- AlterTable
ALTER TABLE "VerificationRequest" DROP COLUMN "draggableId",
DROP COLUMN "index",
ADD COLUMN     "identifier" TEXT NOT NULL,
ADD COLUMN     "token" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "VerificationRequest_token_key" ON "VerificationRequest"("token");
