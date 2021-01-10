import { Router } from "express";

import container from "../dependency-container/container";

import {CounterGet} from "../controllers/counter/counterGet";

const counterRouter: Router = Router();
// In order to have a minimum observability we should add some Logger tracking Req/Res in Controllers
// Should be a cleanest way to define the controllers
const getController: CounterGet = container.get("genially_counter.get_controller");
counterRouter.get("/", getController.find );

export default counterRouter;