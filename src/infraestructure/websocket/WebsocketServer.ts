import express from "express";
import { Server, Socket } from "socket.io";
import type { IWebsocketServer } from "@/domain/interfaces/IWebsocketServer.js";
import cors from "cors";

export class WebSocketServer implements IWebsocketServer{
  private static instance: WebSocketServer;
  private io?: Server;
  private app?: express.Application;
  private server?: any;

  private constructor() {}

  public start() {
    if (!this.app) {
      this.app = express();
      this.app.use(express.json());
      this.app.use(cors());

      this.server = this.app.listen(4001, () => {
        console.log("Server is running on port 4001");
      });

      this.io = new Server(this.server, {
        cors: {
          origin: "*",
        },
        pingTimeout: 60000,
      });

      this.setupConnectionHandlers();
    }
  }

  private setupConnectionHandlers() {
    if (!this.io) return;
    this.io.on("connection", (socket: Socket) => {

      socket.on("room", (roomId: string) => {
        socket.join(roomId);
      })


      socket.on("disconnect", () => {
        // console.log("user disconnected");
      });
    });
  }

  public emitToRoom(roomId: string, event: string, payload: any) {
    if (!this.io) {
      throw new Error("Server not initialized");
    }
    this.io.to(roomId).emit(event, payload);
  }

  public static getInstance(): WebSocketServer {
    if (!WebSocketServer.instance) {
      WebSocketServer.instance = new WebSocketServer();
    }
    return WebSocketServer.instance;
  }
}
