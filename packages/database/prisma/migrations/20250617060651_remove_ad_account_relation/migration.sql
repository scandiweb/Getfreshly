/*
  Warnings:

  - You are about to drop the column `adAccountId` on the `AdPerformanceSnapshot` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "AdPerformanceSnapshot" DROP CONSTRAINT "AdPerformanceSnapshot_adAccountId_fkey";

-- AlterTable
ALTER TABLE "AdPerformanceSnapshot" DROP COLUMN "adAccountId";
