import { UpdateRoomUseCase } from "../../../application/room/UpdateRoom.js";
export class UpdateRoomController {
    updateRoomUseCase;
    constructor(updateRoomUseCase) {
        this.updateRoomUseCase = updateRoomUseCase;
    }
    async run(_parent, { input }, ctx) {
        const token = ctx.token.split(' ')[1];
        const { name, topic, topic_salida, roomId } = input;
        try {
            const room = await this.updateRoomUseCase.run(name, topic, topic_salida, roomId, token);
            return {
                code: "200",
                message: "Room updated successfully",
                success: true,
                room
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
