import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "../graphql/typeDefs";
import { createServer } from 'node:http'
import { resolvers } from "../graphql/resolvers";
import express, { Express} from 'express'
import { print } from "../../config/Signale";
import cors from 'cors'

export class Server {
    public app: ApolloServer
    public httpServer: any
    public appExpress: Express

    constructor() {
        this.appExpress = express()
        this.httpServer = createServer(this.appExpress)
        
        this.app = new ApolloServer({
                typeDefs,
                resolvers,
                context: ({ req, res }) => {
                if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
                    const token = req.headers.authorization.split(' ')[1]
                    return { ctx: {token} }
                }else {
                    return { ctx: {token: null} }
                }
               
            },
        })
    }

    async start(port: number) {
        await this.app.start()
        this.app.applyMiddleware({app: this.appExpress, path: '/graphql'})
        this.appExpress.use(cors({
            origin: [`${process.env.FRONTEND_URL || 'http://localhost:3000'}`]
        }))
        this.httpServer.listen(port, () => {
            print.start(`http://localhost:4000/graphql`)
        })
        
    }

}
