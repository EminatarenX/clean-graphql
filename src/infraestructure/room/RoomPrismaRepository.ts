import { PrismaClient } from "@prisma/client";
import { Room } from "@/domain/entities/Room";
import { IRoomRepository } from "@/domain/interfaces/IRoomRepository";
import { Tool } from "@/domain/entities/Tool";

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

    async findRooms(userId: string): Promise<Room[] | null> {
        const rooms = await this.db.room.findMany({
            where: {
                userId
            },
            include: {
                tools: true
            }
        })

        if(rooms.length === 0) throw new Error('There are no rooms')

        if(rooms[0].userId !== userId) throw new Error('Unauthorized request')

        return rooms.map(room => new Room( room.id, room.name, room.userId, room.tools.map(tool => new Tool(tool.id, tool.name, tool.state, tool.roomId))))
    }

    async deleteRoom(roomId: string, userId: string): Promise<boolean | null> {
        const exist = await this.db.room.findUnique({
            where: {
                id: roomId
            }
        })

        if(!exist) throw new Error('Room does not exist')

        if(exist.userId !== userId)
            throw new Error('Unauthorized requested, You have not permission to modify this')

        await this.db.room.delete({
            where: {id: roomId}, 
            include: {tools: true}
        })

        return true
    }
}