import { AuthUser } from "../../../application/user/AuthUser";

type createInput = {
  input: {
    email: string;
    password: string;
  };
};

export class AuthUserController {
  constructor(private readonly authUser: AuthUser) {}

  // @Validate
  async run(_: any, { input }: createInput) {
    const { email, password } = input;
    return await this.authUser.run(email, password);
  }
}
