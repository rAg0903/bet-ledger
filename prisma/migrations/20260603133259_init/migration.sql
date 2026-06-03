-- CreateTable
CREATE TABLE "UserSettings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "currency" TEXT NOT NULL DEFAULT 'EUR',
    "oddsFormat" TEXT NOT NULL DEFAULT 'DECIMAL',
    "initialBankroll" REAL NOT NULL DEFAULT 0,
    "voidPolicy" TEXT NOT NULL DEFAULT 'REDUCE_TO_ONE',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Bet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "placedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "settledAt" DATETIME,
    "sport" TEXT,
    "competition" TEXT,
    "market" TEXT,
    "notes" TEXT,
    "stake" REAL NOT NULL,
    "combinedOdds" REAL NOT NULL,
    "potentialReturn" REAL NOT NULL,
    "actualReturn" REAL,
    "profitLoss" REAL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "BetLeg" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "betId" TEXT NOT NULL,
    "orderIndex" INTEGER NOT NULL,
    "eventLabel" TEXT NOT NULL,
    "selection" TEXT NOT NULL,
    "homeTeam" TEXT,
    "awayTeam" TEXT,
    "oddsDecimal" REAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    CONSTRAINT "BetLeg_betId_fkey" FOREIGN KEY ("betId") REFERENCES "Bet" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "Bet_placedAt_idx" ON "Bet"("placedAt");

-- CreateIndex
CREATE INDEX "Bet_status_idx" ON "Bet"("status");

-- CreateIndex
CREATE INDEX "Bet_type_idx" ON "Bet"("type");

-- CreateIndex
CREATE INDEX "BetLeg_betId_idx" ON "BetLeg"("betId");

-- CreateIndex
CREATE INDEX "BetLeg_homeTeam_idx" ON "BetLeg"("homeTeam");

-- CreateIndex
CREATE INDEX "BetLeg_awayTeam_idx" ON "BetLeg"("awayTeam");
