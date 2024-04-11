import { userResolver } from "../user/graphql/userResolver.js";
import { roomResolver } from "../room/graphql/roomResolver.js";
import { resolvers as toolsResolvers } from "../tool/graphql/resolvers.js";
export const resolvers = {
    Query: {
        ...userResolver.Query,
        ...roomResolver.Query,
        ...toolsResolvers.Query
    },
    Mutation: {
        ...userResolver.Mutation,
        ...roomResolver.Mutation,
        ...toolsResolvers.Mutation
    }
};
