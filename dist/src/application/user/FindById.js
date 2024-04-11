export class FindUserById {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async run(id) {
        return await this.userRepository.findById(id);
    }
}
