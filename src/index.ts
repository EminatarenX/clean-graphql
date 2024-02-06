import 'module-alias/register';
import { NextFunction, Request, Response } from "express";
import { Server } from "./infraestructure/server/server";
import { print } from "./config/Signale";
import UserRouter from './infraestructure/user/UserRoutes';
const server = new Server()
const app = server.application
export const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000'
const PORT = process.env.PORT || 4000
app.use(server.json)
app.use((_: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', FRONTEND_URL) 
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})
app.use('/api/users', UserRouter)
export const socketServer = app.listen(PORT, () => print.start())
import { socketHandler } from './infraestructure/socket/Dependencies';
socketHandler.connect()