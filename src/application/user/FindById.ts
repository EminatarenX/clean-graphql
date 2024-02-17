import { IUserRepository } from "../../domain/interfaces/IUserRepository";

export class FindUserById {
    constructor(
        private readonly userRepository: IUserRepository,
    ){}

    async run(id: string) {
        return await this.userRepository.findById(id)
    }
}   