import { WebSocketServer } from "./WebsocketServer.js";
import { RoomPrismaRepository } from "../room/RoomPrismaRepository.js";
import { Listener } from "../../application/websocket/Listener.js";
import { ListenerController } from "./controllers/ListenerController.js";
export const serverws = WebSocketServer.getInstance();
const roomRepository = new RoomPrismaRepository();
const listenerUseCase = new Listener(serverws, roomRepository);
export const listenerController = new ListenerController(listenerUseCase);
