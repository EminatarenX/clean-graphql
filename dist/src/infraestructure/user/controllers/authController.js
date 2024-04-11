import { AuthUser } from "../../../application/user/AuthUser.js";
export class AuthUserController {
    authUser;
    constructor(authUser) {
        this.authUser = authUser;
    }
    // @Validate
    async run(_, { input }) {
        const { email, password } = input;
        try {
            const user = await this.authUser.run(email, password);
            return {
                code: "200",
                message: "User authenticated successfully",
                status: "success",
                user: user
            };
        }
        catch (error) {
            const err = error;
            return {
                code: "400",
                message: err.message,
                status: "error",
            };
        }
    }
}
