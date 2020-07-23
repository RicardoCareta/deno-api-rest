interface User {
    id : string,
    username: string,
    password: string
}

const users: User[] = [];

import { v4 } from 'https://deno.land/std/uuid/mod.ts';

export default {
    getAll : () => {
        return users;
    },

    create : (username: string, password : string) : User => {
        const index = users.push({
            id : v4.generate(),
            username,
            password
        }) - 1;

        return users[index];
    }
}