import { UpdateUser } from "../../../application/user/UpdateUser";
import { Request, Response } from "express";

export class UpdateUserController {
    constructor(private readonly updateUser: UpdateUser){}

    async run(req: Request, res: Response) {
        const { id } = req.params;
        const { name } = req.body;
        try {
            const user = await this.updateUser.run(id, name)
            res.status(201).json({user})
        } catch (error) {
            res.status(400).json({message: 'there has an error', error})
        }
    }
}