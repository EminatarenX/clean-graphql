import { FindRoomById } from "../../../application/room/findById";

type FindRoomByIdInput = {
    input: {
        roomId: string
    }
}


export class FindRoomByIdController {
    constructor(
        private readonly findById: FindRoomById
    ){}

    async run (_: any, {input}: FindRoomByIdInput, {ctx}: any) {
        const { roomId } = input
        const { token } = ctx
        return await this.findById.run(roomId, token)
    }
}