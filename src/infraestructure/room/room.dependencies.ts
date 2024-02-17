import { CreateRoom } from "../../application/room/Create";
import { FindRoomById } from "../../application/room/findById";
import { CreateRoomController } from "./controller/create.controller";
import { FindRoomByIdController } from "./controller/findById.controller";
import { RoomPrismaRepository } from "./RoomPrismaRepository";

const roomRepository = new RoomPrismaRepository()

// create 
const createRoomUseCase = new CreateRoom(roomRepository)
export const createRoomController = new CreateRoomController(createRoomUseCase)

// findById 
const findRoomUseCase = new FindRoomById(roomRepository)
export const findRoomByIdController = new FindRoomByIdController(findRoomUseCase)