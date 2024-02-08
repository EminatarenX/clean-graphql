import { CreateUserController } from "../../user/controllers/create.controller";
import { UserPrismaRepository } from "../../database/orm/UserPrismaRepository";
import { Create } from "../../../application/use-cases/user/Create";
import { BcryptService } from "../../user/services/BcryptService";

const userRepositoryPrisma = new UserPrismaRepository()
// create
const bcrypt = new BcryptService()
const createUserUseCase = new Create(userRepositoryPrisma, bcrypt)
export const createUserController = new CreateUserController(createUserUseCase)

