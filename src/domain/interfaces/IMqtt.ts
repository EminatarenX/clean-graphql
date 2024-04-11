export interface IMqtt {
    publish(topic: string, payload: { water_bomb: number }): void
    subscribe(topic: string): void
}