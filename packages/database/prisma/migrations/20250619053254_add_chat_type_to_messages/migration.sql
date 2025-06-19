-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "chatType" TEXT NOT NULL DEFAULT 'general';

-- CreateIndex
CREATE INDEX "Message_userId_chatType_idx" ON "Message"("userId", "chatType");
