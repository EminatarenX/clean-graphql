import { PrismaClient } from "@prisma/client";
import { Room } from "../../domain/entities/Room.js";
export class RoomPrismaRepository {
    db;
    constructor() {
        this.db = new PrismaClient();
    }
    async create(name, topic, topic_salida, userId) {
        const exist = await this.db.room.findFirst({
            where: {
                userId,
                name,
                topic,
            },
        });
        if (exist)
            throw new Error("This room already Exist");
        const newRoom = await this.db.room.create({
            data: {
                name,
                topic,
                salida: topic_salida,
                userId,
            },
        });
        return new Room(newRoom.id, newRoom.name, newRoom.topic, newRoom.salida, newRoom.userId);
    }
    async findById(id) {
        const exist = await this.db.room.findUnique({
            where: {
                id,
            },
            include: {
                tools: true,
            },
        });
        if (!exist)
            throw new Error("this room does not exist");
        return new Room(exist.id, exist.name, exist.topic, exist.salida, exist.userId, exist.water);
    }
    async findRooms(userId) {
        const rooms = await this.db.room.findMany({
            where: {
                userId,
            },
            include: {
                tools: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        if (rooms.length === 0)
            throw new Error("There are no rooms");
        if (rooms[0].userId !== userId)
            throw new Error("Unauthorized request");
        return rooms.map((room) => new Room(room.id, room.name, room.topic, room.salida, room.userId, room.water));
    }
    async deleteRoom(roomId, userId) {
        const exist = await this.db.room.findUnique({
            where: {
                id: roomId,
            },
        });
        if (!exist)
            throw new Error("Room does not exist");
        if (exist.userId !== userId)
            throw new Error("Unauthorized requested, You have not permission to modify this");
        await this.db.room.delete({
            where: { id: roomId },
            include: { tools: true },
        });
        return true;
    }
    async updateRoom(name, topic, topic_salida, roomId, userId) {
        const exist = await this.db.room.findUnique({
            where: {
                id: roomId,
            },
        });
        if (!exist)
            throw new Error("This room does not exist");
        if (exist.userId !== userId)
            throw new Error("Unauthorized request, you don't have any permission");
        const updatedRoom = await this.db.room.update({
            where: {
                id: roomId,
            },
            data: {
                name,
                topic,
                salida: topic_salida,
            },
        });
        return new Room(updatedRoom.id, updatedRoom.name, updatedRoom.topic, updatedRoom.salida, updatedRoom.userId);
    }
    async findOutTopic(salida) {
        const room = await this.db.room.findFirst({
            where: {
                salida
            }
        });
        if (!room)
            throw new Error("This room does not exist");
        return new Room(room.id, room.name, room.topic, room.salida, room.userId, room.water);
    }
}
