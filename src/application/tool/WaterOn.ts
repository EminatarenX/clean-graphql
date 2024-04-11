import type { IToolRepository } from "@/domain/interfaces/IToolRepository.js";
import type { IJWTRepository } from "@/domain/interfaces/IJWTRepository.js";
import type { IMqtt } from "@/domain/interfaces/IMqtt.js";
import type { IRoomRepository } from "@/domain/interfaces/IRoomRepository";
export class WaterOnCase {
  constructor(
    private readonly toolRepository: IToolRepository, private readonly jwtRepository: IJWTRepository,private readonly mqttService: IMqtt, private readonly roomRepository: IRoomRepository) { }

  async run(roomId: string, payload: {water_bomb: number}, token: string) {
    const { data: userId } = await this.jwtRepository.verify(token);
    const tool = await this.toolRepository.waterInterruptor(roomId,payload);  
    const room = await this.roomRepository.findById(roomId);
    if(!room) throw new Error("Room not found, verify the output topic and try again.");
    if(room.userId !== userId) throw new Error("You are not allowed to access this room.");
    if(tool && room){
      this.mqttService.publish(room.topic,payload);
    }
    return tool;
  }
}
