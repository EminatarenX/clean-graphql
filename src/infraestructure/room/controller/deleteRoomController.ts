import { DeleteRoom } from "../../../application/room/DeleteRoom.js";

export class DeleteRoomController {
  constructor(private readonly deleteUseCase: DeleteRoom) {}

  async run(_parent: any, { input }: any, ctx: any) {
    const { roomId } = input;
    let token = ctx.token.split(" ")[1];
    try {
      const response = await this.deleteUseCase.run(roomId, token);
      return {
        code: "200",
        message: "Room deleted successfully",
        success: response,
      };
    } catch (error) {
      const err = error as Error;
      return {
        code: "400",
        message: err.message,
        success: false,
      };
    }
  }
}
