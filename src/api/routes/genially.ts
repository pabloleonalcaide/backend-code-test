import { Router } from "express";
import * as controller from "../controllers/genially/geniallyPost";

const geniallyRouter: Router = Router();

geniallyRouter.post("/", controller.create);


export default geniallyRouter;