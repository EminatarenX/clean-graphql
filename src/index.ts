import { Server } from "./infraestructure/server/server.js";
import { mqttService } from "./infraestructure/services/dependencies.js";
(async () => {

  const server = new Server()
  await server.start()
  mqttService.start()

})()
