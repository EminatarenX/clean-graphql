export class Tool {
    id;
    name;
    state;
    roomId;
    constructor(id, name, state, roomId) {
        this.id = id;
        this.name = name;
        this.state = state;
        this.roomId = roomId;
    }
}
