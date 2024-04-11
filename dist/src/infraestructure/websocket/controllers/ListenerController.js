import { Listener } from "../../../application/websocket/Listener.js";
export class ListenerController {
    listener;
    constructor(listener) {
        this.listener = listener;
    }
    async run(topic, message) {
        const messageParsed = JSON.parse(message.toString());
        await this.listener.run(topic, messageParsed);
    }
}
