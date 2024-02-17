import { createRoomController, findRoomByIdController } from "../room.dependencies"

export const roomResolver = {
    Query: {
        findRoom: findRoomByIdController.run.bind(findRoomByIdController)
    },
    Mutation: {
        createRoom: createRoomController.run.bind(createRoomController)
    }
}