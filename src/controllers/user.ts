import { RouterContext } from "https://deno.land/x/oak/router.ts";
import { SendErrorMessage } from '../util/index.ts';

import { UserService } from '../services/index.ts';

export default {
    index : async ({ response, request } : RouterContext) => {
        response.body = UserService.getAll();
        return;
    },

    store: async (context: RouterContext) => {
        if (!context.request.hasBody) {
            SendErrorMessage(context, "Body is required");
            return;
        }

        //@ts-ignore
        const body = context.request.body({ type: "json" });

        const { username, password } = await body.value;
        if (!username) {
            SendErrorMessage(context, "Username is required");
            return;
        }

        if (!password) {
            SendErrorMessage(context, "Password is required");
            return;
        }

        const user = UserService.create(username, password);
        
        context.response.status = 201;
        context.response.body = user;
    },
}