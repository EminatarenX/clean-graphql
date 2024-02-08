import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { User } from "../../../domain/entities/User";
import { IBcryptRepository } from "../../../domain/repositories/IBcryptRepository";
export class Create {
    constructor(
        private readonly userRepository: IUserRepository,
        private readonly bcryptRepository: IBcryptRepository
    ){}

    async run(email: string, password: string) {
        const hashedPassword = await this.bcryptRepository.hash(password)
        const user = new User(email, hashedPassword)
        return await this.userRepository.create(user)
    }

}