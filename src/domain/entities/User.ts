export class User {
    constructor(
        public email: string,
        public password: string,
        public id?: string,
        public createdAt?: Date,
        public updatedAt?: Date,
        public jwt?: string
    ){}   

    setJwt(jwt: string) {
        this.jwt = jwt;
    }
    setPassword() {
        this.password = '';
    }
}