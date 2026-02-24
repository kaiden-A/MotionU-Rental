/*
  Warnings:

  - Added the required column `imgLink` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publicId` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "imgLink" TEXT NOT NULL,
ADD COLUMN     "publicId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "rental_requests" ADD COLUMN     "returnDate" TIMESTAMP(3),
ADD COLUMN     "timeReturn" TIMESTAMP(3);
