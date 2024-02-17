import jwt from 'jsonwebtoken'
import { IJWTRepository } from '../../domain/interfaces/IJWTRepository';

export class JWTService implements IJWTRepository {
    async sign(payload: any, expiresIn: string): Promise<string> {
        return jwt.sign({
            data: payload
          }, `${process.env.JWT_SECRET || 'SECRET'}`, { expiresIn: expiresIn});
          
    }
    async verify(token: string): Promise<any> {
        try {
            return jwt.verify(token, process.env.JWT_SECRET || 'SECRET')
            
        } catch (error) {
            throw new Error('Unauthorized Request, JWT Malformed')
        }
    }
}