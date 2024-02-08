import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { PrismaClient } from "@prisma/client";
import { User } from "../../../domain/entities/User";
export class UserPrismaRepository implements IUserRepository {
    private prisma : PrismaClient
    constructor(){
        this.prisma = new PrismaClient()
    }
    async create(user: User): Promise<User | null> {
        const exist = await this.prisma.user.findFirst({where:{email: user.email}})
        if(exist){
            return null
        }
        const createdUser = await this.prisma.user.create({
            data: {
                email: user.email,
                password: user.password
            }
        })

        return new User(
            createdUser.email,
            createdUser.password,
            createdUser.id,
            createdUser.createdAt,
            createdUser.updatedAt
        );
    }
}