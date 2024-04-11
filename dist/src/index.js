import { Server } from "./infraestructure/server/server.js";
import { mqttService } from "./infraestructure/services/dependencies.js";
import { serverws } from "./infraestructure/websocket/dependencies.js";
(async () => {
    const server = new Server();
    await server.start();
    serverws.start();
    mqttService.start();
})();
