import { PrismaClient } from "@prisma/client";
import { Tool } from "../../domain/entities/Tool.js";
import type { IToolRepository } from "../../domain/interfaces/IToolRepository.js";

export class ToolPrismaRepository implements IToolRepository {
  private db: PrismaClient;
  constructor() {
    this.db = new PrismaClient();
  }
  async waterInterruptor(id: string, payload: { water_bomb: number; }): Promise<boolean> {
    const room = await this.db.room.update({
      where: {
        id
      }, 
      data: {
        water: payload.water_bomb === 1 ? true : false
      }
    })

    if(room) {

      return true
    }
    return false
  }
}
