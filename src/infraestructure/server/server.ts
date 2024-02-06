import express from 'express'

export class Server {
    public application: express.Application
    public json: any

    constructor(){
        this.application = express()
        this.json = express.json()
    }
}