import { authUserController, createUserController } from "../user.dependencies.js";
export const userResolver = {
    Query: {
        authUser: authUserController.run.bind(authUserController)
    },
    Mutation: {
        createUser: createUserController.run.bind(createUserController),
        auth: authUserController.run.bind(authUserController)
    }
};
