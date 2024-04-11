export class Listener {
    serverws;
    roomRepository;
    constructor(serverws, roomRepository) {
        this.serverws = serverws;
        this.roomRepository = roomRepository;
    }
    async run(topic, message) {
        try {
            const room = await this.roomRepository.findOutTopic(topic);
            if (!room)
                throw new Error("Room not found, verify the output topic and try again.");
            this.serverws.emitToRoom(room.id, "room", message);
        }
        catch (error) {
            const err = error;
            this.serverws.emitToRoom(topic, "room", err.message);
        }
    }
}
