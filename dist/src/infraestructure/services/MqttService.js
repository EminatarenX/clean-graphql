import mqtt from 'mqtt';
import { listenerController } from "../websocket/dependencies.js";
export class MqttService {
    client;
    constructor() {
        this.client = mqtt.connect(process.env.MQTT_URL || 'mqtt://localhost:1883');
    }
    start() {
        this.client.on("connect", () => console.log("Connected to MQTT server"));
    }
    publish(topic, payload) {
        this.client.publish(topic, JSON.stringify(payload));
    }
    subscribe(topic) {
        this.client.on("message", listenerController.run.bind(listenerController));
        this.client.subscribe(topic);
    }
}
