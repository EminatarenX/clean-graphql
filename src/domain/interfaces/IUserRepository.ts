import { User } from "../entities/User.js"
export interface IUserRepository {
  create(user: User): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
}
