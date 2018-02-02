import { LoginDTO } from './login.dto';
import { AuthService } from './auth.service';
import { Controller, Post, HttpCode, HttpStatus, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ){}

    @Post()
    @HttpCode(HttpStatus.OK)
    public async getToken(@Body() loginDTO: LoginDTO) {
        return await this.authService.createToken(loginDTO.username);
    }


}