import { makeJwt, setExpiration, Payload } from "https://deno.land/x/djwt/create.ts"
import { RouterContext } from "https://deno.land/x/oak/router.ts";

import { UserService } from '../services/index.ts';


export default {
    authenticate: async ({ request, response }: RouterContext) => {
        //@ts-ignore
        const body = request.body({ type: "json" });

        const { username, password } = await body.value;
        const user = UserService.getAll().find(u => u.username == username && u.password == password);
        if (!user) {
            response.status = 401;
            response.body = {
                error : "Invalid user"
            }
            return;
        }

        const payload: Payload = {
            iss: username,
            exp: setExpiration(new Date().getTime() + 60000)
        };
        const key = Deno.env.get("JWT_SECRET")!;

        const token = await makeJwt({
            key,
            header : {
                alg : "HS256"
            },
            payload
        }) 
        
        response.status = 200;
        response.body = {
            token,
        }
    }
}