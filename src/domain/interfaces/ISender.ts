export interface ISender {
    send(event: string, payload: any): void;
    recieve(event: string, callback: (data: any) => void): void;
    sender(): any;
}