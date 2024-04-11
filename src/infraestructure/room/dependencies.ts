import { CreateRoom } from "@/application/room/Create.js";
import { FindRoomById } from "@/application/room/findById.js";
import { CreateRoomController } from "./controller/createController.js";
import { FindRoomByIdController } from "./controller/findByIdController.js";
import { RoomPrismaRepository } from "./RoomPrismaRepository.js";
import { JWTService } from "../services/JWTService.js";
import { FindAllRooms } from "@/application/room/FindAllRooms.js";
import { FindAllRoomsController } from "./controller/findAllRoomsController.js";
import { DeleteRoomController } from './controller/deleteRoomController.js'
import { DeleteRoom } from '@/application/room/DeleteRoom.js'
import { UpdateRoomUseCase } from "@/application/room/UpdateRoom.js";
import { UpdateRoomController } from "./controller/updateRoomController.js";
import { MqttService } from "../services/MqttService.js";
const roomRepository = new RoomPrismaRepository()
const jwtService = new JWTService()
const mqttService = new MqttService()

// create 
const createRoomUseCase = new CreateRoom(roomRepository, jwtService, mqttService)
export const createRoomController = new CreateRoomController(createRoomUseCase)

// findById 
const findRoomUseCase = new FindRoomById(roomRepository, jwtService, mqttService)
export const findRoomByIdController = new FindRoomByIdController(findRoomUseCase)

// findAll
const findAllRoomsUseCase = new FindAllRooms(roomRepository, jwtService)
export const findAllRoomsController = new FindAllRoomsController(findAllRoomsUseCase)
// delete
const deleteRoomUseCase = new DeleteRoom(roomRepository, jwtService)
export const deleteRoomController = new DeleteRoomController(deleteRoomUseCase)

const updateRoomUseCase = new UpdateRoomUseCase(roomRepository, jwtService)
export const updateRoomController = new UpdateRoomController(updateRoomUseCase)
