import { IJWTRepository } from "@/domain/interfaces/IJWTRepository";
import { IRoomRepository } from "@/domain/interfaces/IRoomRepository";

export class FindAllRooms {
    constructor(
        private readonly roomRepository: IRoomRepository,
        private readonly jwtRepository: IJWTRepository
    ){}

    async run (token: string) {
        const { data : userId } = await this.jwtRepository.verify(token)
        return await this.roomRepository.findRooms(userId)
    }
}