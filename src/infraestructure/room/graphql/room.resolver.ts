import { createRoomController, deleteRoomController, findAllRoomsController, findRoomByIdController } from "../room.dependencies"


export const roomResolver = {
    Query: {
        findRoom: findRoomByIdController.run.bind(findRoomByIdController),
        findRooms: findAllRoomsController.run.bind(findAllRoomsController)
    },
    Mutation: {
        createRoom: createRoomController.run.bind(createRoomController),
        deleteRoom: deleteRoomController.run.bind(deleteRoomController)
    }
}