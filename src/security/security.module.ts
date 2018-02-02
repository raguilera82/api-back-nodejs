import { AuthController } from './auth.controller';
import { MiddlewaresConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import * as passport from 'passport';

import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

const expiresIn = { provide: 'expiresIn', useValue: 60 * 60 };
const secret = { provide: 'secret', useValue: 'secret' };

@Module({
    controllers: [AuthController],
    components: [AuthService, expiresIn, secret, JwtStrategy]
})
export class SecurityModule implements NestModule{

    public configure(consumer: MiddlewaresConsumer) {
        consumer.apply(passport.authenticate('jwt', { session: false }))
        .forRoutes({path: '/api/protected/*', method: RequestMethod.ALL});
    }

}