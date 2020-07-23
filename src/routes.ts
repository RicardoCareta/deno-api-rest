import { Router } from 'https://deno.land/x/oak/mod.ts';

import { UserController, LoginController } from "./controllers/index.ts";
import auth from './middlewares/auth.ts';

const router = new Router();

router.post("/user", UserController.store);

router.post("/login", LoginController.authenticate);

router.use(auth);

router.get("/user", UserController.index);

export default router;