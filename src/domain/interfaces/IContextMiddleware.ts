import { Request, Response } from "express";
export interface IAuthMiddleware {
    auth(req: Request, res: Response): any;
}