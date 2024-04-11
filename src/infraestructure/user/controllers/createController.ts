import { Create } from "../../../application/user/Create.js";

type createInput = {
  input: {
    email: string;
    password: string;
  };
};

export class CreateUserController {
  constructor(private readonly createUser: Create) { }

  async run(_: any, { input }: createInput) {

    const { email, password } = input;
    try {

      const user = await this.createUser.run(email, password);

      return {
        code: "200",
        message: "User created successfully",
        status: "success",
        user
      }
    } catch (err) {
      const error = err as Error;
      return {
        code: "400",
        message: error.message,
        status: "error"

      }
    }
  }
}
