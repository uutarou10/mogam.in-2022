/*
  Warnings:

  - Added the required column `createdAt` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `displayOrder` to the `Media` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Article` ADD COLUMN `createdAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Media` ADD COLUMN `displayOrder` INTEGER NOT NULL;
