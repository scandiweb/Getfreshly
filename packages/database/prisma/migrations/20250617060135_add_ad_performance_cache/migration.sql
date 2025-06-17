-- CreateTable
CREATE TABLE "AdPerformanceSnapshot" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "adAccountId" TEXT NOT NULL,
    "facebookAdAccountId" TEXT NOT NULL,
    "totalAdsAnalyzed" INTEGER NOT NULL,
    "averageImpressions" DOUBLE PRECISION NOT NULL,
    "averageCTR" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdPerformanceSnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdPerformanceData" (
    "id" TEXT NOT NULL,
    "snapshotId" TEXT NOT NULL,
    "facebookAdId" TEXT NOT NULL,
    "adName" TEXT NOT NULL,
    "impressions" INTEGER NOT NULL,
    "ctr" DOUBLE PRECISION NOT NULL,
    "engagementRateRanking" TEXT,
    "performanceScore" INTEGER NOT NULL,
    "performanceCategory" TEXT NOT NULL,
    "impressionsVsAverage" TEXT NOT NULL,
    "ctrVsAverage" TEXT NOT NULL,
    "engagementRanking" TEXT NOT NULL,
    "reasons" TEXT[],
    "adCreatedTime" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdPerformanceData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "AdPerformanceSnapshot_userId_facebookAdAccountId_idx" ON "AdPerformanceSnapshot"("userId", "facebookAdAccountId");

-- CreateIndex
CREATE INDEX "AdPerformanceSnapshot_createdAt_idx" ON "AdPerformanceSnapshot"("createdAt");

-- CreateIndex
CREATE INDEX "AdPerformanceData_snapshotId_idx" ON "AdPerformanceData"("snapshotId");

-- CreateIndex
CREATE INDEX "AdPerformanceData_facebookAdId_idx" ON "AdPerformanceData"("facebookAdId");

-- AddForeignKey
ALTER TABLE "AdPerformanceSnapshot" ADD CONSTRAINT "AdPerformanceSnapshot_adAccountId_fkey" FOREIGN KEY ("adAccountId") REFERENCES "AdAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdPerformanceData" ADD CONSTRAINT "AdPerformanceData_snapshotId_fkey" FOREIGN KEY ("snapshotId") REFERENCES "AdPerformanceSnapshot"("id") ON DELETE CASCADE ON UPDATE CASCADE;
