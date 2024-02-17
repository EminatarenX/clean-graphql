import { CreateRoom } from "../../../application/room/Create";

type createRoomInput = {
    input: {
        name: string,
        userId: string
    }
}

export class CreateRoomController {
    constructor(
        private readonly createRoom: CreateRoom
    ){}

    async run(_: any, {input}: createRoomInput){
        
        const { name, userId } = input
        return await this.createRoom.run(name, userId)
    }
}