import { User } from "../entities/User"
export interface IUserRepository {
    create(user: User): Promise <User | null>;
    findByEmail(email: string): Promise<User | null>;
}