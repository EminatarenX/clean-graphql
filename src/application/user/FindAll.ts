import { IUserRepository } from "../../domain/user/IUserRepository";

export class FindAll {
    constructor(private readonly repository: IUserRepository){}
    async run() {
        return await this.repository.findAll()
    }
}