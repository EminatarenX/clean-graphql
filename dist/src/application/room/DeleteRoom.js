export class DeleteRoom {
    roomRepository;
    jwtRepository;
    constructor(roomRepository, jwtRepository) {
        this.roomRepository = roomRepository;
        this.jwtRepository = jwtRepository;
    }
    async run(roomId, token) {
        const { data: userId } = await this.jwtRepository.verify(token);
        return await this.roomRepository.deleteRoom(roomId, userId);
    }
}
