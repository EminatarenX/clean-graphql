import { FindRoomById } from "../../../application/room/findById.js";
export class FindRoomByIdController {
    findById;
    constructor(findById) {
        this.findById = findById;
    }
    async run(_, { input }, ctx) {
        const { roomId } = input;
        const token = ctx.token.split(' ')[1];
        const room = await this.findById.run(roomId, token);
        return room;
    }
}
