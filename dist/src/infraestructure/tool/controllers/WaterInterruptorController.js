import { WaterOnCase } from "../../../application/tool/WaterOn.js";
export class WaterInterruptorController {
    createToolUseCase;
    constructor(createToolUseCase) {
        this.createToolUseCase = createToolUseCase;
    }
    async run(_parent, { input }, ctx) {
        const { payload, roomId } = input;
        const token = ctx.token.split(" ")[1];
        const tool = await this.createToolUseCase.run(roomId, payload, token);
        if (tool) {
            return {
                code: "200",
                message: "Water interruptor updated",
                success: true
            };
        }
        else {
            return {
                code: "400",
                message: "Error updating water interruptor",
                success: false
            };
        }
    }
}
