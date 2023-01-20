-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "StoreType" ADD VALUE 'KAFKA';
ALTER TYPE "StoreType" ADD VALUE 'RABBITMQ';

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "provider_type" TEXT NOT NULL,
    "provider_id" TEXT NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);
