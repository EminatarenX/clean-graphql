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
        userId: String
    }

    type Mutation {
        createRoom(input: RoomInput): Room
    }

    input findRoomInput {
        roomId: String
    }


    type Query {
        findRooms: [Room]
        findRoom(input: findRoomInput) : Room
    }
`