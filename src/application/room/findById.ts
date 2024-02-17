import { IJWTRepository } from "@/domain/interfaces/IJWTRepository";
import { IRoomRepository } from "@/domain/interfaces/IRoomRepository";
export class FindRoomById {
    constructor(
        private readonly roomRepository: IRoomRepository,
        private readonly jwtRepository: IJWTRepository
    ){}

    async run(id: string, token: string) {
        const { data: userId } = await this.jwtRepository.verify(token)
        return await this.roomRepository.findById(id, userId)
    }
}