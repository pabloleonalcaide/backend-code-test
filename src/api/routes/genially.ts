import { Router } from "express";
import * as postController from "../controllers/genially/geniallyPost";
import * as deleteController from "../controllers/genially/geniallyDelete";

const geniallyRouter: Router = Router();

geniallyRouter.post("/", postController.create);
geniallyRouter.delete("/", deleteController.remove);


export default geniallyRouter;