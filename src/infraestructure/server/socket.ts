import { Server as socketServer } from "socket.io";

export class SocketServer {
    private io: socketServer

    constructor(server: any, url: string){
        this.io = new socketServer(server, {
            pingTimeout: 60000,
            cors: {
                origin: url
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