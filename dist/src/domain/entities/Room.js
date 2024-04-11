export class Room {
    id;
    name;
    topic;
    topic_salida;
    userId;
    water;
    constructor(id, name, topic, topic_salida, userId, water) {
        this.id = id;
        this.name = name;
        this.topic = topic;
        this.topic_salida = topic_salida;
        this.userId = userId;
        this.water = water;
    }
}
