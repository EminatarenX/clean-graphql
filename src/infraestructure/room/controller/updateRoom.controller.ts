import { UpdateRoomUseCase } from "@/application/room/UpdateRoom";
export class UpdateRoomController {
  constructor(private readonly updateRoomUseCase: UpdateRoomUseCase) { }
  async run(_parent: any, { input }: any, { ctx }: any) {
    const { token } = ctx
    const { name, roomId } = input
    return await this.updateRoomUseCase.run(name, roomId, token)
  }

}
