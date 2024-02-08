export const userTypeDefs = `
    type User {
        id: ID
        email: String!
        password: String
        createdAt: String
        updatedAt: String
    }

    input UserInput {
        email: String
        password: String
    }

    type Mutation {
        createUser(input: UserInput): User
    }

    type Query {
        auth: String
    }
`