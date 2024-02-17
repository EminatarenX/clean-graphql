import { CreateUserController } from "./controllers/create.controller";
import { UserPrismaRepository } from "./UserPrismaRepository";
import { Create } from "../../application/user/Create";
import { BcryptService } from '../services/BcryptService'
import { JWTService } from "../services/JWTService";
import { AuthUser } from "../../application/user/AuthUser";
import { AuthUserController } from "./controllers/auth.controller";

const userRepositoryPrisma = new UserPrismaRepository()
const bcrypt = new BcryptService()
const jwtService = new JWTService()

// create
const createUserUseCase = new Create(userRepositoryPrisma, bcrypt)
export const createUserController = new CreateUserController(createUserUseCase)

// Auth 
const authUserUseCase = new AuthUser(userRepositoryPrisma, bcrypt, jwtService)
export const authUserController = new AuthUserController(authUserUseCase)