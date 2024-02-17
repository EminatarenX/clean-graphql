import { IRoomRepository } from "../../domain/interfaces/IRoomRepository";
export class FindRoomById {
    constructor(
        private readonly roomRepository: IRoomRepository
    ){}

    async run(id: string, userId: string) {
        
        return await this.roomRepository.findById(id, userId)
    }
}