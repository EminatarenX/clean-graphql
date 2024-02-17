import { IBcryptRepository } from "../../domain/interfaces/IBcryptRepository";
import bcrypt from 'bcrypt'

export class BcryptService implements IBcryptRepository {
    hash(password: string): Promise<string> {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hash(password, salt)
    }
    compare(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash)
    }
}