import { CreateRoom } from "@/application/room/Create.js";

type createRoomInput = {
  input: {
    name: string;
    topic: string;
    topic_salida: string;
  };
};

export class CreateRoomController {
  constructor(private readonly createRoom: CreateRoom) { }

  async run(_: any, { input }: createRoomInput, ctx: any) {
    let token = ctx.token.split(" ")[1];
    const { name, topic, topic_salida } = input;
    return await this.createRoom.run(name, topic, topic_salida, token);
  }
}
