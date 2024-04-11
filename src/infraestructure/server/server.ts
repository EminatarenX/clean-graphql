import { ApolloServer } from "@apollo/server";
import { typeDefs } from "../graphql/typeDefs.js";
import { resolvers } from "../graphql/resolvers.js";
import { print } from "@/config/Signale.js";
import { startStandaloneServer } from '@apollo/server/standalone'

export class Server {
  private server: ApolloServer;
  constructor() {
    this.server = new ApolloServer({
      typeDefs,
      resolvers,
    });
  }

  async start() {
    const { url } = await startStandaloneServer(this.server, {
      listen: { port: 4000 },
      context: async ({ req }) => ({ token: req.headers.authorization })
    });

    print.start(`Server ready at ${url}`);
  }
}
