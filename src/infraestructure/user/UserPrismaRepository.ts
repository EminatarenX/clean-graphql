import type { IUserRepository } from "@/domain/interfaces/IUserRepository.js";
import { PrismaClient } from "@prisma/client";
import { ApolloError } from "apollo-server-express";
import { User } from "@/domain/entities/User.js";
export class UserPrismaRepository implements IUserRepository {
  private prisma: PrismaClient
  constructor() {
    this.prisma = new PrismaClient()
  }
  async create(user: User): Promise<User | null> {
    const exist = await this.prisma.user.findFirst({ where: { email: user.email } })
    if (exist) {
      throw new ApolloError('this email is already registered', 'EMAIL_ALREADY_REGISTERED', {
        code: '123',
        title: 'Email Already Registered',
        detail: 'The email you tried to register is already in use.',
        source: { pointer: '/data/attributes/email' },
      });

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

  async findByEmail(email: string): Promise<User | null> {
    const exist = await this.prisma.user.findUnique({
      where: {
        email
      }
    })

    if (!exist) {
      return null;
    }
    return new User(
      exist.email,
      exist.password,
      exist.id,
      exist.createdAt,
      exist.updatedAt
    )
  }

  async findById(id: string): Promise<User | null> {
    const exist = await this.prisma.user.findUnique({
      where: {
        id
      }
    })

    if (!exist) throw new Error('Unauthorized request')

    return new User(
      exist.email,
      exist.password,
      exist.id,
      exist.createdAt,
      exist.updatedAt
    )
  }
}
