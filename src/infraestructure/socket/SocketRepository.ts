import { ISocketRepository } from "../../domain/socket/ISocketRepository";
import { Server } from "socket.io";

export class SocketRepository implements ISocketRepository {
    private io: Server;
    constructor(private readonly server: Express.Application, private readonly frontendUrl: string) {
        this.io = new Server( this.server, {
            cors: {
                origin: this.frontendUrl,
            },
            pingTimeout: 60000,
        })
    }

    connect(): void {
        this.io.on('connection', (socket) => {
            console.log({user_connected: socket.id})
            socket.on('disconnect', () => {
                console.log('user disconnected')
            })
        })
    }
    
}