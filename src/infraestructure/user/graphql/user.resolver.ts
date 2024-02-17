import { authUserController, createUserController } from "../user.dependencies"

export const userResolver = {
    Query: {
        auth:  (_: any, {input}: {input: any}, {ctx}: any) => {
            console.log(ctx)
        }
       
    },
    Mutation: {
        createUser: createUserController.run.bind(createUserController),
        auth: authUserController.run.bind(authUserController)
    }
}