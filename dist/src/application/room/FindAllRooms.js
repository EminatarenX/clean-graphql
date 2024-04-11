export class FindAllRooms {
    roomRepository;
    jwtRepository;
    constructor(roomRepository, jwtRepository) {
        this.roomRepository = roomRepository;
        this.jwtRepository = jwtRepository;
    }
    async run(token) {
        const { data: userId } = await this.jwtRepository.verify(token);
        return await this.roomRepository.findRooms(userId);
    }
}
