import { Router } from "express";
import { 
    createUserController,
    updateUserController,
    deleteUserController,
    findAllUserController,
    authUserController
} from './dependencies'

const UserRouter = Router()

UserRouter.post(
    '/',
    createUserController.run.bind(createUserController)
)

UserRouter.put(
    '/:id',
    updateUserController.run.bind(updateUserController)
)

UserRouter.delete(
    '/:id', 
    deleteUserController.run.bind(deleteUserController)
)

UserRouter.get(
    '/',
    findAllUserController.run.bind(findAllUserController)
)

UserRouter.post(
    '/auth',
    authUserController.run.bind(authUserController)
)

export default UserRouter;
