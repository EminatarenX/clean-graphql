import { socketServer, FRONTEND_URL } from "../../index";
import { SocketRepository } from "./SocketRepository";
import { SocketHandler } from "../../application/socket/SocketHandler";

const socketRepository = new SocketRepository(socketServer, FRONTEND_URL)
export const socketHandler = new SocketHandler(socketRepository)