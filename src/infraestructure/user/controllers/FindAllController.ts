import { Request, Response } from "express";
import { FindAll } from "../../../application/user/FindAll";

export class FindAllController{
    constructor(private readonly findAll: FindAll){}

    async run(req: Request, res: Response){
        try {
            const users = await this.findAll.run()
            res.status(200).json({users})
        } catch (error) {
            res.status(400).json({message: 'there has an error', error})
        }
    }
}