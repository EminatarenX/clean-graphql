import express from "express";
import { Server, Socket } from "socket.io";
import cors from "cors";
export class WebSocketServer {
    static instance;
    io;
    app;
    server;
    constructor() { }
    start() {
        if (!this.app) {
            const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";
            const frontendUrl2 = process.env.FRONTEND_URL_SEC || "http://localhost:3001";
            this.app = express();
            this.app.use(express.json());
            this.app.use(cors({
                origin: [
                    "http://localhost:3000",
                    frontendUrl,
                    frontendUrl2,
                ]
            }));
            this.server = this.app.listen(4001, () => {
                console.log("Server is running on port 4001");
            });
            this.io = new Server(this.server, {
                cors: {
                    origin: [
                        "http://localhost:3000",
                        frontendUrl,
                        frontendUrl2,
                    ],
                },
                pingTimeout: 60000,
            });
            this.setupConnectionHandlers();
        }
    }
    setupConnectionHandlers() {
        if (!this.io)
            return;
        this.io.on("connection", (socket) => {
            socket.on("room", (roomId) => {
                socket.join(roomId);
            });
            socket.on("disconnect", () => {
                // console.log("user disconnected");
            });
        });
    }
    emitToRoom(roomId, event, payload) {
        if (!this.io) {
            throw new Error("Server not initialized");
        }
        this.io.to(roomId).emit(event, payload);
    }
    static getInstance() {
        if (!WebSocketServer.instance) {
            WebSocketServer.instance = new WebSocketServer();
        }
        return WebSocketServer.instance;
    }
}
