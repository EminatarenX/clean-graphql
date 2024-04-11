import { WaterOnCase } from "../../application/tool/WaterOn.js";
import { ToolPrismaRepository } from "./ToolPrismaRepository.js";
import { MqttService } from "../services/MqttService.js";
import { JWTService } from "../services/JWTService.js";
import { WaterInterruptorController } from "./controllers/WaterInterruptorController.js";
import { RoomPrismaRepository } from "../room/RoomPrismaRepository.js";
const toolRepository = new ToolPrismaRepository();
const mqttService = new MqttService();
const roomRepository = new RoomPrismaRepository();
const jwtService = new JWTService();
// Water Interruptor 
const waterOnCase = new WaterOnCase(toolRepository, jwtService, mqttService, roomRepository);
export const waterInterruptorController = new WaterInterruptorController(waterOnCase);
