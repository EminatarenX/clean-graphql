import { Create } from "@/application/user/Create";
import { Validate } from "../../services/decorators";

type createInput = {
  input: {
    email: string;
    password: string;
  };
};

export class CreateUserController {
  constructor(private readonly createUser: Create) {}

  // @Validate
  async run(_: any, { input }: createInput) {
    const { email, password } = input;
    return await this.createUser.run(email, password);
  }
}
