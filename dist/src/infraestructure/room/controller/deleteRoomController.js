import { DeleteRoom } from "../../../application/room/DeleteRoom.js";
export class DeleteRoomController {
    deleteUseCase;
    constructor(deleteUseCase) {
        this.deleteUseCase = deleteUseCase;
    }
    async run(_parent, { input }, ctx) {
        const { roomId } = input;
        let token = ctx.token.split(" ")[1];
        try {
            const response = await this.deleteUseCase.run(roomId, token);
            return {
                code: "200",
                message: "Room deleted successfully",
                success: response,
            };
        }
        catch (error) {
            const err = error;
            return {
                code: "400",
                message: err.message,
                success: false,
            };
        }
    }
}
