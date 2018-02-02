import { UsersService } from './users.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('api')
export class UsersController {

    constructor(
        private readonly usersService: UsersService
    ){}

    @Get('public/users')
    public getUsers() {
        return this.usersService.getUsers();
    }

    @Get('protected/users')
    public getUsersProtected() {
        return this.getUsers();
    }

    @Get('public/users/extra/:username')
    public getUserExtraInfo(@Param('username') username: string) {
        return this.usersService.getUserExtraInfoByUsername(username);
    }

    

}