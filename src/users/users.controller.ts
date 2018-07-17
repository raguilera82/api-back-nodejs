import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

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

    @Get('protected/users/extra/:username')
    public getUserExtraInfoProtected(@Param('username') username: string) {
        return this.getUserExtraInfo(username);
    }

    

}