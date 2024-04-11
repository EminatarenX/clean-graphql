/*
  Warnings:

  - A unique constraint covering the columns `[topic]` on the table `Room` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[salida]` on the table `Room` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Room_topic_key" ON "Room"("topic");

-- CreateIndex
CREATE UNIQUE INDEX "Room_salida_key" ON "Room"("salida");
