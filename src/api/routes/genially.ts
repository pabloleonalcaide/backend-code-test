import { Router } from "express";

import container from "../dependency-container/container";

import {GeniallyPost} from "../controllers/genially/geniallyPost";
import { GeniallyPut } from "../controllers/genially/geniallyPut";
import { GeniallyDelete } from "../controllers/genially/geniallyDelete";

const geniallyRouter: Router = Router();
// In order to have a minimum observability we should add some Logger tracking Req/Res in Controllers
// Should be a cleanest way to define the controllers
const postController: GeniallyPost = container.get("genially.post_controller");
geniallyRouter.post("/", postController.create );
const putController: GeniallyPut = container.get("genially.put_controller");
geniallyRouter.put("/", putController.update);
const deleteController: GeniallyDelete = container.get("genially.delete_controller");
geniallyRouter.delete("/", deleteController.remove);

export default geniallyRouter;