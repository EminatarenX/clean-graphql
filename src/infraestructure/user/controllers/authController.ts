import { AuthUser } from "@/application/user/AuthUser.js";

type createInput = {
  input: {
    email: string;
    password: string;
  };
};

export class AuthUserController {
  constructor(private readonly authUser: AuthUser) { }

  // @Validate
  async run(_: any, { input }: createInput) {
    const { email, password } = input;
    try {

      const user = await this.authUser.run(email, password);
      return {
        code: "200",
        message: "User authenticated successfully",
        status: "success",
        user: user
      }
    } catch (error) {
      const err = error as Error;
      return {
        code: "400",
        message: err.message,
        status: "error",
      }
    }
  }
}
