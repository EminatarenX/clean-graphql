import { FindAllRooms } from "../../../application/room/FindAllRooms";
type ctxType = {
    ctx: {
        token: string
    }
}
export class FindAllRoomsController {
    constructor(private readonly findAllUseCase: FindAllRooms){}
    async run (_:any, __: any, {ctx}: ctxType){
        const { token } = ctx
        return await this.findAllUseCase.run(token)
    }
}