import { Tool } from "./Tool";
export class Room {
    constructor(
        private readonly id: string,
        private readonly name: string,
        private readonly userId: string,
        private readonly tools?: Tool[]
    ){}
}