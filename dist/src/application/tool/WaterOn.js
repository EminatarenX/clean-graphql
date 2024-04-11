export class WaterOnCase {
    toolRepository;
    jwtRepository;
    mqttService;
    roomRepository;
    constructor(toolRepository, jwtRepository, mqttService, roomRepository) {
        this.toolRepository = toolRepository;
        this.jwtRepository = jwtRepository;
        this.mqttService = mqttService;
        this.roomRepository = roomRepository;
    }
    async run(roomId, payload, token) {
        const { data: userId } = await this.jwtRepository.verify(token);
        const tool = await this.toolRepository.waterInterruptor(roomId, payload);
        const room = await this.roomRepository.findById(roomId);
        if (!room)
            throw new Error("Room not found, verify the output topic and try again.");
        if (room.userId !== userId)
            throw new Error("You are not allowed to access this room.");
        if (tool && room) {
            this.mqttService.publish(room.topic, payload);
        }
        return tool;
    }
}
