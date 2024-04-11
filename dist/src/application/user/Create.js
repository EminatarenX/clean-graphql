import { User } from "../../domain/entities/User.js";
export class Create {
    userRepository;
    bcryptRepository;
    constructor(userRepository, bcryptRepository) {
        this.userRepository = userRepository;
        this.bcryptRepository = bcryptRepository;
    }
    async run(email, password) {
        const hashedPassword = await this.bcryptRepository.hash(password);
        const user = new User(email, hashedPassword);
        return await this.userRepository.create(user);
    }
}
