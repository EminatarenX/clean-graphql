export const userTypeDefs = `
    type User {
        id: ID
        email: String!
        password: String
        jwt: String
        createdAt: String
        updatedAt: String
    }

    input UserInput {
        email: String
        password: String
    }

    type UserResponse {
      code: String
      status: String
      message: String
      user: User
    }

    type Mutation {
        createUser(input: UserInput): UserResponse
        auth(input: UserInput): UserResponse
    }

    type Query {
        authUser: UserResponse
    }


`
