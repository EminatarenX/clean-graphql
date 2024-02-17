import { CreateRoom } from "@/application/room/Create";
import { FindRoomById } from "@/application/room/findById";
import { CreateRoomController } from "./controller/create.controller";
import { FindRoomByIdController } from "./controller/findById.controller";
import { RoomPrismaRepository } from "./RoomPrismaRepository";
import { JWTService } from "../services/JWTService";
import { FindAllRooms } from "@/application/room/FindAllRooms";
import { FindAllRoomsController } from "./controller/findAllRooms.controller";
import { DeleteRoomController } from './controller/deleteRoom.controller'
import { DeleteRoom } from '@/application/room/DeleteRoom'

const roomRepository = new RoomPrismaRepository()
const jwtService = new JWTService()

// create 
const createRoomUseCase = new CreateRoom(roomRepository, jwtService)
export const createRoomController = new CreateRoomController(createRoomUseCase)

// findById 
const findRoomUseCase = new FindRoomById(roomRepository, jwtService)
export const findRoomByIdController = new FindRoomByIdController(findRoomUseCase)

// findAll
const findAllRoomsUseCase = new FindAllRooms(roomRepository, jwtService)
export const findAllRoomsController = new FindAllRoomsController(findAllRoomsUseCase)

const deleteRoomUseCase = new DeleteRoom(roomRepository, jwtService)
export const deleteRoomController = new DeleteRoomController(deleteRoomUseCase)