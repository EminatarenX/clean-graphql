import type { IJWTRepository } from "@/domain/interfaces/IJWTRepository.js";
import type { IMqtt } from "@/domain/interfaces/IMqtt";
import type { IRoomRepository } from "@/domain/interfaces/IRoomRepository.js";

export class CreateRoom {
  constructor(
    private readonly roomRepository: IRoomRepository,
    private readonly jwtRepository: IJWTRepository,
    private readonly mqttService: IMqtt
  ) { }

  async run(name: string,topic: string, topic_salida: string, token: string) {
    const { data: userId } = await this.jwtRepository.verify(token);
    this.mqttService.subscribe(topic_salida);
    return await this.roomRepository.create(name, topic, topic_salida, userId);
  }
}
