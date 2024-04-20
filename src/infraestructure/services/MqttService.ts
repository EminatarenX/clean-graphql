
import type { MqttClient } from "mqtt"
import mqtt from 'mqtt'
import type { IMqtt } from "../../domain/interfaces/IMqtt.js"
import { sendController } from "../room/dependencies.js"


export class MqttService implements IMqtt{
  private client: MqttClient

  constructor() {
    this.client = mqtt.connect(process.env.MQTT_URL || 'mqtt://localhost:1883')
  }

  start(){
    this.client.on("connect", () => console.log("Connected to MQTT server"))
  }


  publish(topic: string, payload: any){
      this.client.publish(topic, JSON.stringify(payload))
  }
  subscribe(topic: string) {
    this.client.on("message", sendController.run.bind(sendController))
    this.client.subscribe(topic)
  }

  

}
