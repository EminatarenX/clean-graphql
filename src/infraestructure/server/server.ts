import { ApolloServer } from "apollo-server";
import { typeDefs } from "../typeDefs/typeDefs";
import { resolvers } from "../resolvers/resolvers";

import { print } from "../../config/Signale";

export class Server {
    public app: ApolloServer

    constructor() {
        this.app = new ApolloServer({
            typeDefs,
            resolvers,
            context: () => {
                return {
                    name: 'user'
                }
            }
        })
    }

    async start(port: number) {
        this.app.listen(port, () => {
            print.start(`http://localhost:${port}`)
        })
    }
}
