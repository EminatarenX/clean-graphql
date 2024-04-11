import { CreateUserController } from "./controllers/createController.js";
import { UserPrismaRepository } from "./UserPrismaRepository.js";
import { Create } from "../../application/user/Create.js";
import { BcryptService } from '../services/BcryptService.js'
import { JWTService } from "../services/JWTService.js";
import { AuthUser } from "../../application/user/AuthUser.js";
import { AuthUserController } from "./controllers/authController.js";

const userRepositoryPrisma = new UserPrismaRepository()
const bcrypt = new BcryptService()
const jwtService = new JWTService()

// create
const createUserUseCase = new Create(userRepositoryPrisma, bcrypt)
export const createUserController = new CreateUserController(createUserUseCase)

// Auth 
const authUserUseCase = new AuthUser(userRepositoryPrisma, bcrypt, jwtService)
export const authUserController = new AuthUserController(authUserUseCase)
