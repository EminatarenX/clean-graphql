import { User } from "./user";

export interface IUserRepository {
    create(user: User): Promise<User>;
    update(user: User): Promise<User>;
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    delete(id: string): Promise<void>;
    findAll(): Promise <User[] | []>;
    
}