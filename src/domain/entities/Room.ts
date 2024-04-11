
export class Room {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly topic: string,
    public readonly topic_salida: string,
    public readonly userId: string,
    public readonly water?: boolean
  ) { }
}
