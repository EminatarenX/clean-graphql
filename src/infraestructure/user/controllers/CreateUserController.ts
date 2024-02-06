import { CreateUser } from "../../../application/user/CreateUser";
import { Request, Response } from "express";

export class CreateUserController {
    constructor(private readonly createUser: CreateUser) {}
    async run(req: Request, res: Response) {
        const { name, email, password } = req.body;
        try {
            const user = await this.createUser.run(name, email, password);
            res.status(200).json({ user });
        } catch (error: any) {
            const { message } = error;
            res.status(400).json({ message: "there has an error", error: message });
        }
  }
}
