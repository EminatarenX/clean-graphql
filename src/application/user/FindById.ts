import type { IUserRepository } from "../../domain/interfaces/IUserRepository.js";

export class FindUserById {
  constructor(
    private readonly userRepository: IUserRepository,
  ) { }

  async run(id: string) {
    return await this.userRepository.findById(id)
  }
}   
