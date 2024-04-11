import { FindRoomById } from "@/application/room/findById.js";

type FindRoomByIdInput = {
  input: {
    roomId: string
  }
}


export class FindRoomByIdController {
  constructor(
    private readonly findById: FindRoomById
  ) { }

  async run(_: any, { input }: FindRoomByIdInput, ctx: any) {
    const { roomId } = input
    const token = ctx.token.split(' ')[1]
    const room =  await this.findById.run(roomId, token)
    return room
  }
}
