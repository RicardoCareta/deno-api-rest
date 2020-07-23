import { RouterContext } from "https://deno.land/x/oak/router.ts";

export default (context : RouterContext, message : string) => {
    context.response.status = 400;
    return context.response.body = {
        message
    }
}