import { UpdateRoomUseCase } from "@/application/room/UpdateRoom.js";
export class UpdateRoomController {
  constructor(private readonly updateRoomUseCase: UpdateRoomUseCase) { }
  async run(_parent: any, { input }: any, ctx: any) {
    const token = ctx.token.split(' ')[1]
    const { name,topic, topic_salida, roomId } = input
    try {
      const room = await this.updateRoomUseCase.run(name,topic, topic_salida, roomId, token)
      return {
        code: "200",
        message: "Room updated successfully",
        success: true,
        room
      }
    } catch (error) {
      const err = error as Error
      return {
        code: "400",
        message: err.message,
        success: false,
      }
    }
  }


}
