import { Listener } from "@/application/websocket/Listener.js";

export class ListenerController {
    constructor(
        private readonly listener: Listener
    ){}

    async run(topic: string, message: any) {
        const messageParsed = JSON.parse(message.toString())
        await this.listener.run(topic, messageParsed)
    }
}