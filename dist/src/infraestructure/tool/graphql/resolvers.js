import { waterInterruptorController } from "../dependencies.js";
export const resolvers = {
    Query: {
        getData: () => "Hello World"
    },
    Mutation: {
        waterInterruptor: waterInterruptorController.run.bind(waterInterruptorController)
    }
};
