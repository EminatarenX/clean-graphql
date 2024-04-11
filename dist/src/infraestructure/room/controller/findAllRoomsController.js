import { FindAllRooms } from "../../../application/room/FindAllRooms.js";
export class FindAllRoomsController {
    findAllUseCase;
    constructor(findAllUseCase) {
        this.findAllUseCase = findAllUseCase;
    }
    async run(_, __, ctx) {
        let t = ctx.token.split(" ")[1];
        return await this.findAllUseCase.run(t);
    }
}
