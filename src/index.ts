import { Server } from "./infraestructure/server/server";
import { SocketServer } from "./infraestructure/server/socket"; 
// require('tsconfig-paths').register();

(async() => {
    const port: number =  Number(process.env.PORT) || 4000

    const server = new Server()
    await server.start(port)
    const socketServer = new SocketServer(server.httpServer)
    socketServer.start()
    
})()