import { UsersService } from './users.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('api/public/users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService
    ){}

    @Get()
    public getUsers() {
        return this.usersService.getUsers();
    }

    @Get('extra/:username')
    public getUserExtraInfo(@Param('username') username: string) {
        return this.usersService.getUserExtraInfoByUsername(username);
    }

}