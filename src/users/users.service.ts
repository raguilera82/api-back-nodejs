import { MAP_USERS } from './data/users-extra.data';
import { USERS } from './data/users.data';
import { Component } from '@nestjs/common';

@Component()
export class UsersService {

    getUsers() {
        return USERS;
    }

    getUserExtraInfoByUsername(username: string) {
        return MAP_USERS.get(username);
    }

}