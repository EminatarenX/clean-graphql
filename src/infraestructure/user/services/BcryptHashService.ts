import { IBcryptRepository } from '../../../domain/user/IBcryptRepository'
import bcrypt from 'bcrypt'

export class BcryptHashService implements IBcryptRepository {
    hash(password: string): Promise<string> {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hash(password, salt)
    }
    compare(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash)
    }
}