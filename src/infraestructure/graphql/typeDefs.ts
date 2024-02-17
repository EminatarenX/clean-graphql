import { gql } from "apollo-server";
import { userTypeDefs } from "../user/graphql/user.types";
import { roomTypeDefs } from "../room/graphql/room.types";

export const typeDefs = gql`
    ${userTypeDefs}

    ${roomTypeDefs}
`