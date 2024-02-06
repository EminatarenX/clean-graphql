import { CreateUserController } from "./controllers/CreateUserController";
import { CreateUser } from "../../application/user/CreateUser";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { UpdateUser } from "../../application/user/UpdateUser";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { DeleteUser } from "../../application/user/DeleteUser";
import { FindAll } from "../../application/user/FindAll";
import { FindAllController } from "./controllers/FindAllController";
import { AuthUserController } from "./controllers/AuthUserController";
import { AuthUser } from "../../application/user/AuthUser";

import { BcryptHashService } from "./services/BcryptHashService";
import { JWTService } from "./services/JWTService";
import { UserRepositoryPrisma } from "./UserRepositoryPrisma";
export const repository = new UserRepositoryPrisma()
export const bcryptRepository = new BcryptHashService()
export const jwtRepository = new JWTService()

// Create
export const createUserUseCase = new CreateUser(repository, bcryptRepository)
export const createUserController = new CreateUserController(createUserUseCase)
// Update
export const updateUserUseCase = new UpdateUser(repository)
export const updateUserController = new UpdateUserController(updateUserUseCase)
// Delete
export const deleteUserUseCase = new DeleteUser(repository)
export const deleteUserController = new DeleteUserController(deleteUserUseCase)
// FindAll
export const findAllUserUseCase = new FindAll(repository)
export const findAllUserController = new FindAllController(findAllUserUseCase)
// Auth
export const authUserUseCase = new AuthUser(repository, bcryptRepository, jwtRepository)
export const authUserController = new AuthUserController(authUserUseCase)