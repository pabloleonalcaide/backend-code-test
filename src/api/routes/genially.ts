import { Router } from "express";
import * as postController from "../controllers/genially/geniallyPost";
import * as putController from "../controllers/genially/geniallyPut";
import * as deleteController from "../controllers/genially/geniallyDelete";

const geniallyRouter: Router = Router();

geniallyRouter.post("/", postController.create);
geniallyRouter.put("/", putController.update);
geniallyRouter.delete("/", deleteController.remove);


export default geniallyRouter;