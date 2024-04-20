import { io } from "socket.io-client";

export class Sender {
    private socket: any
    
    constructor() {
        this.socket = io(process.env.SOCKET_URL || 'http://localhost:4001')

    }
    
    send(event: string, payload: any){
        this.socket.emit(event, payload)
    }

    recieve(event: string, callback: (data: any) => void){
        this.socket.on('connect', () =>{
            this.socket.on(event, callback)
        })  
       
    }

    sender() {
        return this.socket
    }
}