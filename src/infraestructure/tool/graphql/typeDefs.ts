export const typeDefs = `
    type Query {
        getData: String
    }

    input WaterInterruptorInput {
        roomId: String!
        payload: PayloadWaterInterruptor!
    }

    input PayloadWaterInterruptor {
        water_bomb: Int
    }

    type ToolsResponse {
        code: String
        message: String
        success: Boolean
    }

    type Mutation {
        waterInterruptor(input: WaterInterruptorInput!): ToolsResponse
    }

`