import { Request, Response } from "express";
import { AuthUser } from "../../../application/user/AuthUser";

export class AuthUserController {
    constructor(private readonly authUser: AuthUser){}
    async run(req: Request, res: Response) {
        const { email, password } = req.body;
        try {
            const user = await this.authUser.run(email, password)
            res.status(200).json({user})
        } catch (error : any) {
            const { message } = error

            res.status(400).json({message: 'there has an error',error: message})
        }
    }
}