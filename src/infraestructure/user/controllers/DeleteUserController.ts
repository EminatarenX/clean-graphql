import { DeleteUser } from "../../../application/user/DeleteUser";
import { Request, Response } from "express";

export class DeleteUserController {
    constructor(private readonly deleteUser: DeleteUser){}

    async run(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await this.deleteUser.run(id)
            res.status(201).json({message: 'user deleted'})
        } catch (error) {
            res.status(400).json({message: 'there has an error', error})
        }
    }
}