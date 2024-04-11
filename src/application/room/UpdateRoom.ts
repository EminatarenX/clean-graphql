import type { IRoomRepository } from "@/domain/interfaces/IRoomRepository.js";
import type { IJWTRepository } from "@/domain/interfaces/IJWTRepository.js";
export class UpdateRoomUseCase {
  constructor(
    private readonly roomRepository: IRoomRepository, private readonly jwtRepository: IJWTRepository) { }

  async run(name: string,topic: string, topic_salida: string, roomId: string, token: string) {
    const { data: userId } = await this.jwtRepository.verify(token)
    return await this.roomRepository.updateRoom(name,topic, topic_salida, roomId, userId)

  }

}

