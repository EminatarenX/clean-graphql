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
        tools: [Tool]
    }


    input RoomInput {
        name: String
    }

    input RoomId {
        roomId: String
    }
    
    input updateInput {
        name: String
        roomId: String
    }

    type Mutation {
        createRoom(input: RoomInput): Room
        deleteRoom(input: RoomId): Boolean 
        updateRoom(input: updateInput) : Room
    }

    input findRoomInput {
        roomId: String
    }


    type Query {
        findRooms: [Room]
        findRoom(input: findRoomInput) : Room
    }
`
