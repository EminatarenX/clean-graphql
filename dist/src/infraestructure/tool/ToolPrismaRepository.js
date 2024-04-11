import { PrismaClient } from "@prisma/client";
import { Tool } from "../../domain/entities/Tool.js";
export class ToolPrismaRepository {
    db;
    constructor() {
        this.db = new PrismaClient();
    }
    async waterInterruptor(id, payload) {
        const room = await this.db.room.update({
            where: {
                id
            },
            data: {
                water: payload.water_bomb === 1 ? true : false
            }
        });
        if (room) {
            return true;
        }
        return false;
    }
}
