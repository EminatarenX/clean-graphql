import { Create } from "../../../application/user/Create.js";
export class CreateUserController {
    createUser;
    constructor(createUser) {
        this.createUser = createUser;
    }
    async run(_, { input }) {
        const { email, password } = input;
        try {
            const user = await this.createUser.run(email, password);
            return {
                code: "200",
                message: "User created successfully",
                status: "success",
                user
            };
        }
        catch (err) {
            const error = err;
            return {
                code: "400",
                message: error.message,
                status: "error"
            };
        }
    }
}
