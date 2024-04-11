export class UpdateRoomUseCase {
    roomRepository;
    jwtRepository;
    constructor(roomRepository, jwtRepository) {
        this.roomRepository = roomRepository;
        this.jwtRepository = jwtRepository;
    }
    async run(name, topic, topic_salida, roomId, token) {
        const { data: userId } = await this.jwtRepository.verify(token);
        return await this.roomRepository.updateRoom(name, topic, topic_salida, roomId, userId);
    }
}
