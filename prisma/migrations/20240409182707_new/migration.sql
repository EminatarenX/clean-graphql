/*
  Warnings:

  - You are about to drop the column `userId` on the `Sensor` table. All the data in the column will be lost.
  - Added the required column `roomId` to the `Sensor` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sensor" (
    "name" TEXT NOT NULL PRIMARY KEY,
    "roomId" TEXT NOT NULL,
    CONSTRAINT "Sensor_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Sensor" ("name") SELECT "name" FROM "Sensor";
DROP TABLE "Sensor";
ALTER TABLE "new_Sensor" RENAME TO "Sensor";
CREATE UNIQUE INDEX "Sensor_name_key" ON "Sensor"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
