import type { IJWTRepository } from "../../domain/interfaces/IJWTRepository.js";
import type { IRoomRepository } from "../../domain/interfaces/IRoomRepository.js";
import type { IMqtt } from "../../domain/interfaces/IMqtt.js";
import type { ISender } from "src/domain/interfaces/ISender.js";
export class FindRoomById {
  constructor(
    private readonly roomRepository: IRoomRepository,
    private readonly jwtRepository: IJWTRepository,
    private readonly mqttService: IMqtt,
    private readonly sender: ISender
  ) { }

  async run(id: string, token: string) {
    const { data: userId } = await this.jwtRepository.verify(token)
    const room = await this.roomRepository.findById(id)
    if(!room) throw new Error("Room not found, verify the output topic and try again.")
    if(room.userId !== userId) throw new Error("You are not allowed to access this room.")
    this.mqttService.subscribe(room.topic_salida)
    return room
  }
}
