import { IUserRepository } from "../../domain/user/IUserRepository";

export class FindByEmail {
    constructor(private readonly repository: IUserRepository){}
    async run(email: string){
        return await this.repository.findByEmail(email)
    }
}