import type { IWebsocketServer } from "@/domain/interfaces/IWebsocketServer.js";
import type { IRoomRepository } from "@/domain/interfaces/IRoomRepository.js";
import type { IMqtt } from "@/domain/interfaces/IMqtt.js";


export class Listener {
    constructor(
        private readonly serverws: IWebsocketServer,
        private readonly roomRepository: IRoomRepository,
    ){}

    async run (topic: string, message: any) {
       try {
           
            const room = await this.roomRepository.findOutTopic(topic);
            if (!room) throw new Error("Room not found, verify the output topic and try again.");
            this.serverws.emitToRoom(room.id, "room", message);
       } catch (error) {
            const err = error as Error
            this.serverws.emitToRoom(topic, "room", err.message);
       }

    }

}
