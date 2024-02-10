import { Create } from "../../../application/use-cases/user/Create";

type createInput = {
  input: {
    email: string;
    password: string;
  };
};

export class CreateUserController {
  constructor(private readonly createUser: Create) {}
  async run(_: any, { input }: createInput) {
    const { email, password } = input;
    return await this.createUser.run(email, password);
  }
}
