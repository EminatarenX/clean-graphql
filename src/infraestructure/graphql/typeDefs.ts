import { gql } from "apollo-server";
import { userTypeDefs } from "../user/typeDefs/user.types";

export const typeDefs = gql`
    ${userTypeDefs}
`