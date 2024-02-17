import { CreateRoom } from "../../application/room/Create";
import { FindRoomById } from "../../application/room/findById";
import { CreateRoomController } from "./controller/create.controller";
import { FindRoomByIdController } from "./controller/findById.controller";
import { RoomPrismaRepository } from "./RoomPrismaRepository";
import { JWTService } from "../user/services/JWTService";
const roomRepository = new RoomPrismaRepository()
const jwtService = new JWTService()

// create 
const createRoomUseCase = new CreateRoom(roomRepository, jwtService)
export const createRoomController = new CreateRoomController(createRoomUseCase)

// findById 
const findRoomUseCase = new FindRoomById(roomRepository, jwtService)
export const findRoomByIdController = new FindRoomByIdController(findRoomUseCase)