import { IRoomRepository } from "../../domain/interfaces/IRoomRepository";

export class CreateRoom {
    constructor(
        private readonly roomRepository: IRoomRepository
    ){}

    async run(name: string, userId: string) {
        return await this.roomRepository.create(name, userId)
    }
}