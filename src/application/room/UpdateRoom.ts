import { IRoomRepository } from "@/domain/interfaces/IRoomRepository";
import { IJWTRepository } from "@/domain/interfaces/IJWTRepository";
export class UpdateRoomUseCase {
  constructor(
    private readonly roomRepository: IRoomRepository, private readonly jwtRepository: IJWTRepository) { }

  async run(name: string, roomId: string, token: string) {
    const { data: userId } = await this.jwtRepository.verify(token)
    return await this.roomRepository.updateRoom(name, roomId, userId)

  }

}

