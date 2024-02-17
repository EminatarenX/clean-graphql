import { PrismaClient } from "@prisma/client";
import { Room } from "../../domain/entities/Room";
import { IRoomRepository } from "../../domain/interfaces/IRoomRepository";
import { Tool } from "../../domain/entities/Tool";

export class RoomPrismaRepository implements IRoomRepository {
    private db: PrismaClient
    constructor() {
        this.db = new PrismaClient()
    }
    async create(name: string, userId: string): Promise<Room | null> {
        const exist = await this.db.room.findFirst({
            where: {
                userId,
                name
            }
        })

        if(exist) throw new Error('This room already Exist')

        const newRoom = await this.db.room.create({
            data: {
                name,
                userId
            }
        })

        return new Room (
            newRoom.id,
            newRoom.name,
            newRoom.userId
        )
    }

    async findById(id: string, userId: string): Promise<Room | null> {
            const exist = await this.db.room.findUnique({
                where: {
                    id,
                },
                include: {
                    tools: true
                }
            })
    
            if(!exist) throw new Error('this room does not exist')
           

            if(exist.userId !== userId) throw new Error('Unauthorized request')

    
            return new Room(
                exist.id,
                exist.name,
                exist.userId,
                exist.tools?.map(tool => {
                    return new Tool(
                        tool.id,
                        tool.name,
                        tool.state,
                        tool.roomId,
                    )
                })
            )
            
       

    }
}