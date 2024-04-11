import type { IUserRepository } from "../../domain/interfaces/IUserRepository.js";
import type { IBcryptRepository } from "../../domain/interfaces/IBcryptRepository.js";
import { User } from "../../domain/entities/User.js";
export class Create {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly bcryptRepository: IBcryptRepository
  ) { }

  async run(email: string, password: string) {
    const hashedPassword = await this.bcryptRepository.hash(password)
    const user = new User(email, hashedPassword)
    return await this.userRepository.create(user)
  }

}
