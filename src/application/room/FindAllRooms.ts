import type { IJWTRepository } from "../../domain/interfaces/IJWTRepository.js";
import type { IRoomRepository } from "../../domain/interfaces/IRoomRepository.js";

export class FindAllRooms {
  constructor(
    private readonly roomRepository: IRoomRepository,
    private readonly jwtRepository: IJWTRepository
  ) { }

  async run(token: string) {
    const { data: userId } = await this.jwtRepository.verify(token)
    return await this.roomRepository.findRooms(userId)
  }
}
