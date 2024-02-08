import { createUserController } from "../../dependencies/user/user.dependencies"

export const userResolver = {
    Query: {
        auth:  (_: any, {input}: {input: any}, ctx: any) => {
            console.log(ctx)
        }
       
    },
    Mutation: {
        createUser: createUserController.run.bind(createUserController)
    }
}