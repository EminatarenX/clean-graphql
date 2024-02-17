import { DeleteRoom } from "../../../application/room/DeleteRoom";

export class DeleteRoomController {
    constructor(private readonly deleteUseCase: DeleteRoom){}

    async run(_parent: any, {input}: any, {ctx}: any) {
        const { roomId } = input
        const { token } = ctx
        return await this.deleteUseCase.run(roomId, token)
    }
}