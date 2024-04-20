import type { ISender } from "../../domain/interfaces/ISender.js";
import type { IRoomRepository } from "../../domain/interfaces/IRoomRepository.js";

export class Send {
    constructor(
        private readonly roomRepository: IRoomRepository,
        private readonly sender: ISender
    ) { }

    async run(topic: string, message: any) {
        const room = await this.roomRepository.findOutTopic(topic)
        if(!room) throw new Error("Room not found, verify the output topic and try again.")
        const payload = {room: room.id, message}
        if (!room) throw new Error("Room not found, verify the output topic and try again.")
        this.sender.send('subscribed', payload)
    }

}