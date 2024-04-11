export class CreateRoom {
    roomRepository;
    jwtRepository;
    mqttService;
    constructor(roomRepository, jwtRepository, mqttService) {
        this.roomRepository = roomRepository;
        this.jwtRepository = jwtRepository;
        this.mqttService = mqttService;
    }
    async run(name, topic, topic_salida, token) {
        const { data: userId } = await this.jwtRepository.verify(token);
        this.mqttService.subscribe(topic_salida);
        return await this.roomRepository.create(name, topic, topic_salida, userId);
    }
}
