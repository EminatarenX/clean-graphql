import { PrismaClient } from "@prisma/client";
import { IUserRepository } from "../../domain/user/IUserRepository";
import { User } from "../../domain/user/user";

export class UserRepositoryPrisma implements IUserRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async create(user: User): Promise<User> {
        const userSaved = await this.prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password
            }
        })

        return new User(
            userSaved.name,
            userSaved.email,
            userSaved.password,
            userSaved.id,
            userSaved.createdAt,
            userSaved.updatedAt
        );
    }

    async findById(id: string) : Promise<User | null> {
        const user = await this.prisma.user.findUnique({
            where: {
                id: id
            }
        });

        if(!user) {
            return null;
        }

        return new User(
            user.name,
            user.email,
            user.password,
            user.id,
            user.createdAt,
            user.updatedAt
        );
    }

    async update(user: User): Promise<User>{
        const userUpdated = await this.prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                name: user.name,
            }
        });

        return new User(
            userUpdated.name,
            userUpdated.email,
            userUpdated.password,
            userUpdated.id,
            userUpdated.createdAt,
            userUpdated.updatedAt
        );
    }

    async findByEmail(email: string): Promise<User | null> {
        const exist = await this.prisma.user.findFirst({
            where: {
                email
            }
        })

        if(!exist) {
            return null;
        }
        return new User(
            exist.name,
            exist.email,
            exist.password,
            exist.id,
            exist.createdAt,
            exist.updatedAt
        )
    }

    async delete(id: string): Promise<void>{
        await this.prisma.user.delete({
            where: {
                id
            }
        });
    }

    async findAll(): Promise<User[] | []> {
        const users = await this.prisma.user.findMany();
        return users.map(user => new User(
            user.name,
            user.email,
            user.password,
            user.id,
            user.createdAt,
            user.updatedAt
        ));
    }

    
}