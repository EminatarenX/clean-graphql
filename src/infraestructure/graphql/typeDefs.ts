import { userTypeDefs } from "../user/graphql/userTypes.js";
import { roomTypeDefs } from "../room/graphql/roomTypes.js";
import { typeDefs as toolsTypeDefs } from "../tool/graphql/typeDefs.js";

export const typeDefs = `
    ${userTypeDefs}

    ${roomTypeDefs}

    ${toolsTypeDefs}
`
