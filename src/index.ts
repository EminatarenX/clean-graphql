import { Server } from "./infraestructure/server/server";
import { SocketServer } from "./infraestructure/server/socket";

(async() => {
    const port: number =  Number(process.env.PORT) || 4000
    const frontendUlr = process.env.FRONTEND_URL || 'http://localhost:3000'

    const server = new Server()
    await server.start(port)
    const socketServer = new SocketServer(server.httpServer)
    socketServer.start()
    
})()