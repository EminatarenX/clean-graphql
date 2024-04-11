export class User {
    email;
    password;
    id;
    createdAt;
    updatedAt;
    jwt;
    constructor(email, password, id, createdAt, updatedAt, jwt) {
        this.email = email;
        this.password = password;
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.jwt = jwt;
    }
    setJwt(jwt) {
        this.jwt = jwt;
    }
    setPassword() {
        this.password = '';
    }
}
