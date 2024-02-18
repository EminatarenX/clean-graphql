import { createRoomController, deleteRoomController, findAllRoomsController, findRoomByIdController, updateRoomController } from "../room.dependencies"


export const roomResolver = {
  Query: {
    findRoom: findRoomByIdController.run.bind(findRoomByIdController),
    findRooms: findAllRoomsController.run.bind(findAllRoomsController),
  },
  Mutation: {
    createRoom: createRoomController.run.bind(createRoomController),
    updateRoom: updateRoomController.run.bind(updateRoomController),
    deleteRoom: deleteRoomController.run.bind(deleteRoomController)
  }
}
