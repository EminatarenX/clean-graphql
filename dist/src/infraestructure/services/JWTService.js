import jwt from 'jsonwebtoken';
export class JWTService {
    async sign(payload, expiresIn) {
        return jwt.sign({
            data: payload
        }, `${process.env.JWT_SECRET || 'SECRET'}`, { expiresIn: expiresIn });
    }
    async verify(token) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET || 'SECRET');
        }
        catch (error) {
            throw new Error('Unauthorized Request, JWT Malformed');
        }
    }
}
