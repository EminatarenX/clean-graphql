
export interface IToolRepository {
  waterInterruptor(roomId: string,payload: { water_bomb: number }): Promise<boolean>
}
