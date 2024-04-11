import { Room } from "../entities/Room.js";

export interface IRoomRepository {
  create(name: string, topic: string,salida: string, userId: string): Promise<Room | null>;
  findById(id: string): Promise<Room | null>;
  findRooms(userId: string): Promise<Room[] | null>;
  deleteRoom(roomId: string, userId: string): Promise<boolean | null>;
  updateRoom(name: string,topic: string, topic_salida: string, roomId: string, userId: string): Promise<Room | null>;
  findOutTopic(topic: string): Promise<Room | null>;
}
