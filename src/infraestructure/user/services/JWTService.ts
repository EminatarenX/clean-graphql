import jwt from 'jsonwebtoken'
import { IJWTRepository } from '../../../domain/interfaces/IJWTRepository';

export class JWTService implements IJWTRepository {
    async sign(payload: any, expiresIn: string): Promise<string> {
        return jwt.sign({
            data: payload
          }, `${process.env.JWT_SECRET || 'secret'}`, { expiresIn: expiresIn});
          
    }
    async verify(token: string): Promise<any> {
        return jwt.verify(token, process.env.JWT_SECRET || 'SECRET')
    }
}