import type { IJWTRepository } from "../../domain/interfaces/IJWTRepository.js";
import type { IRoomRepository } from "../../domain/interfaces/IRoomRepository.js";

export class DeleteRoom {
  constructor(
    private readonly roomRepository: IRoomRepository,
    private readonly jwtRepository: IJWTRepository
  ) { }

  async run(roomId: string, token: string) {
    const { data: userId } = await this.jwtRepository.verify(token)
    return await this.roomRepository.deleteRoom(roomId, userId)
  }
}
