import { Server as socketServer } from "socket.io";

export class SocketServer {
    private io: socketServer

    constructor(server: any){
        this.io = new socketServer(server, {
            pingTimeout: 60000,
            cors: {
                origin: process.env.FRONTEND_URL || 'http://localhost:3000'
            }

        })
        
    }

    start(){
        this.io.on('connection', (socket) => {
            console.log('New client connected');
            socket.on('disconnect', () => {
              console.log('Client disconnected');
            });
        });
    }
}