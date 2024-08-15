/*
  Warnings:

  - You are about to drop the column `identifier` on the `VerificationRequest` table. All the data in the column will be lost.
  - You are about to drop the column `token` on the `VerificationRequest` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[draggableId]` on the table `VerificationRequest` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `draggableId` to the `VerificationRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `index` to the `VerificationRequest` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "VerificationRequest_identifier_token_key";

-- DropIndex
DROP INDEX "VerificationRequest_token_key";

-- AlterTable
ALTER TABLE "VerificationRequest" DROP COLUMN "identifier",
DROP COLUMN "token",
ADD COLUMN     "draggableId" TEXT NOT NULL,
ADD COLUMN     "index" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Tasks" (
    "id_task" TEXT NOT NULL,
    "index" TEXT NOT NULL,
    "draggableId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id_task")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tasks_index_key" ON "Tasks"("index");

-- CreateIndex
CREATE UNIQUE INDEX "Tasks_draggableId_key" ON "Tasks"("draggableId");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationRequest_draggableId_key" ON "VerificationRequest"("draggableId");

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
