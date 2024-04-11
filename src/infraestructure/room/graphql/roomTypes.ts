export const roomTypeDefs = `
    type Tool {
        id: ID
        name: String
        state: Boolean
        roomId: String
    }

    type Room {
        id: ID
        name: String
        userId: String
        water: Boolean
        topic: String
        topic_salida: String
        tools: [Tool]
    }


    input RoomInput {
        name: String
        topic: String
        topic_salida: String
    }

    input RoomId {
        roomId: String
    }
    
    input updateInput {
        name: String
        topic: String
        topic_salida: String
        roomId: String
    }

    type RoomResponse {
        code: String
        message: String
        success: Boolean
        room: Room
    }

    type Mutation {
        createRoom(input: RoomInput): Room
        deleteRoom(input: RoomId): RoomResponse 
        updateRoom(input: updateInput) : RoomResponse
    }

    input findRoomInput {
        roomId: String
    }


    type Query {
        findRooms: [Room]
        findRoom(input: findRoomInput) : Room
    }
`
