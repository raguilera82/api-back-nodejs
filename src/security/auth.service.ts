import { Component, Inject } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Component()
export class AuthService {

    constructor(
        @Inject('expiresIn') private readonly expiresIn: any,
        @Inject('secret') private readonly secretsOrKey: string 
    ){}

    async createToken(email: string) {
        const user = {email: email};
        const expiresIn = this.expiresIn;
        const token = jwt.sign(user, this.secretsOrKey, {expiresIn});
        return {
            expires_in: this.expiresIn,
            access_token: token
        }
    }

    async validateUser(signedUser): Promise<boolean> {
        return true;
    }

}