import { RouterContext } from "https://deno.land/x/oak/router.ts";
import { validateJwt } from "https://deno.land/x/djwt/validate.ts"

export default async ({ request, response }: RouterContext, next: Function) => {
    const auth = request.headers.get("authorization");

    if (!auth) {
        response.status = 401;
        response.body = {
            error: "Token is required"
        }
        return;
    }

    const key = Deno.env.get("JWT_SECRET")!;
    const [_, jwt] = auth.split(" ");

    const tokenValid = (await validateJwt({
        jwt,
        key,
        algorithm: "HS256"
    })).isValid;

    if (tokenValid) {
        await next();
    }
    else {
        response.status = 401;
        response.body = {
            error: "Invalid token"
        }
    }

}