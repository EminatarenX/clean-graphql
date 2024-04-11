import { FindAllRooms } from "@/application/room/FindAllRooms.js";
export class FindAllRoomsController {
  constructor(private readonly findAllUseCase: FindAllRooms) { }
  async run(_: any, __: any, ctx: any) {
    let t = ctx.token.split(" ")[1]
    return await this.findAllUseCase.run(t)
  }
}
