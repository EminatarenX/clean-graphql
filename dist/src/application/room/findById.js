export class FindRoomById {
    roomRepository;
    jwtRepository;
    mqttService;
    constructor(roomRepository, jwtRepository, mqttService) {
        this.roomRepository = roomRepository;
        this.jwtRepository = jwtRepository;
        this.mqttService = mqttService;
    }
    async run(id, token) {
        const { data: userId } = await this.jwtRepository.verify(token);
        const room = await this.roomRepository.findById(id);
        if (!room)
            throw new Error("Room not found, verify the output topic and try again.");
        if (room.userId !== userId)
            throw new Error("You are not allowed to access this room.");
        this.mqttService.subscribe(room.topic_salida);
        return room;
    }
}
