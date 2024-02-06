import { ISocketRepository } from "../../domain/socket/ISocketRepository";

export class SocketHandler {
    constructor(private readonly socketRepository: ISocketRepository){}
    connect(): void {
        this.socketRepository.connect()
    }

}