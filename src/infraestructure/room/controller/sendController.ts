import { Send } from "../../../application/room/Send.js";

export class SendController {
    constructor(
        private readonly send: Send
    ) { }

    async run(topic: string, message: any) {
        const messageParsed = JSON.parse(message.toString())
        await this.send.run(topic, messageParsed)

    }
}