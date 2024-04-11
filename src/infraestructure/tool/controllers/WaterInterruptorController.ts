import { WaterOnCase } from "@/application/tool/WaterOn.js";
export class WaterInterruptorController {
  constructor(private readonly createToolUseCase: WaterOnCase) { }
  async run(_parent: any, { input }: any, ctx: any) {
    const { payload, roomId } = input;
    const token = ctx.token.split(" ")[1];
    const tool = await this.createToolUseCase.run(roomId, payload, token);
    if(tool){
      return {
        code: "200",
        message: "Water interruptor updated",
        success: true
      }
    }else {
      return {
        code: "400",
        message: "Error updating water interruptor",
        success: false
      }
    }
  }
}
