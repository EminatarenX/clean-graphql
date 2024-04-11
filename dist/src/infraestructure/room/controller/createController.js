import { CreateRoom } from "../../../application/room/Create.js";
export class CreateRoomController {
    createRoom;
    constructor(createRoom) {
        this.createRoom = createRoom;
    }
    async run(_, { input }, ctx) {
        let token = ctx.token.split(" ")[1];
        const { name, topic, topic_salida } = input;
        return await this.createRoom.run(name, topic, topic_salida, token);
    }
}
