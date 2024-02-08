import { gql } from "apollo-server";
import { userTypeDefs } from "./user/user.types";

export const typeDefs = gql`
    ${userTypeDefs}
`