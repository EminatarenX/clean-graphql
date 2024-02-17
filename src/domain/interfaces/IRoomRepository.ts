import { Room } from "../entities/Room";

export interface IRoomRepository {
    create(name: string, userId: string): Promise<Room | null>;
    findById(id: string, userId: string): Promise< Room | null >;
    findRooms(userId: string): Promise<Room[] | null >;
    deleteRoom(roomId: string, userId: string): Promise<boolean | null>;
}