
export class User {
    constructor(
        public name: string,
        public email: string,
        public password: string,
        public id?: string,
        public createdAt?: Date,
        public updatedAt?: Date,
        public jwt?: string
    ){}

    update(name: string) {
        this.name = name;
    }
    setJwt(jwt: string) {
        this.jwt = jwt;
    }
    setPassword() {
        this.password = '';
    }


    
}