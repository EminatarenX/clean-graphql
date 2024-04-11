export interface IWebsocketServer {
    emitToRoom(roomId: string, event: string, payload: any): void
}