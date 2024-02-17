import { Room } from "../entities/Room";

export interface IRoomRepository {
    create(name: string, userId: string): Promise<Room | null>;
    findById(id: string, userId: string): Promise< Room | null >;
}