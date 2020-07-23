import './config/index.ts';
import app from "./app.ts";

const HOST = Deno.env.get("HOST") ?? "0.0.0.0";
const PORT = Deno.env.get("PORT") ?? 3000;

app.addEventListener("listen", ({ hostname, port, secure }) => {
    console.log(
        `Listening on: ${secure ? "https://" : "http://"}${
        hostname ?? "localhost"
        }:${port}`
    );
});

app.addEventListener("error", (evt) => {
    console.log(evt.error);
});

//@ts-ignore
await app.listen({ hostname: HOST, port: PORT });