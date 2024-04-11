export class AuthUser {
    userRepository;
    bcryptRepository;
    jwtRepository;
    constructor(userRepository, bcryptRepository, jwtRepository) {
        this.userRepository = userRepository;
        this.bcryptRepository = bcryptRepository;
        this.jwtRepository = jwtRepository;
    }
    async run(email, password) {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new Error('user not found');
        }
        const isPasswordValid = await this.bcryptRepository.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('password is invalid');
        }
        const token = await this.jwtRepository.sign(user.id, '1h');
        user.setJwt(token);
        user.setPassword();
        return user;
    }
}
