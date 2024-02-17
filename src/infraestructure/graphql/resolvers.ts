import { userResolver } from "../user/graphql/user.resolver";
import { roomResolver } from "../room/graphql/room.resolver";

export const resolvers = [
    userResolver,
    roomResolver
]