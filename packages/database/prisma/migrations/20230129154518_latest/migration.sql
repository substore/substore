/*
  Warnings:

  - Added the required column `name` to the `Backup` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Backup_url_key";

-- AlterTable
ALTER TABLE "Backup" ADD COLUMN     "name" TEXT NOT NULL;
