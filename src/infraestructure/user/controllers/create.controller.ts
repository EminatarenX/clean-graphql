import { Create } from '../../../application/use-cases/user/Create'
export class CreateUserController {
    constructor(private readonly createUser: Create){}
    async run(_:any, {input}: {input: {email: string, password: string}}){
        const {email, password} = input
        try {
            const user = await this.createUser.run(email, password)
            if(!user){
                throw new Error('El usuario ya esta registrado')
            }
            return user
        } catch (error) {
            throw new Error('Internal server error')
        }
    }
}