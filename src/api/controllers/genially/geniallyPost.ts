import { Response, Request } from "express";
import container from "../../dependency-container/container";
import CreateGeniallyService from "../../../contexts/core/genially/application/CreateGeniallyService";
import DatabaseError from "../../../contexts/Shared/Domain/DatabaseError";
import {InvalidArgumentError} from "../../../contexts/Shared/Domain/InvalidArgumentError";

export class GeniallyPost {
  private createService: CreateGeniallyService;
  constructor(){
    this.createService = new CreateGeniallyService(container.get("genially_repository"), container.get("genially_event_bus"));
  }
  public create = async (req: Request, res: Response) => {
    // Service should be an injected dependency  (node-dependency-injection)
    // Should dispatch a command like.. CreateGeniallyCommand who call the application service
    try {
      // Consideer to dispatch a createGeniallyCommand to the CommandBus
      await this.createService.execute({
        id: req.body.id,
        name: req.body.name,
        description: req.body.description
      });
      res.status(201).json({ status: `Genially ${req.body.id} created` });
    } catch (error) {
      if(error instanceof DatabaseError || error instanceof InvalidArgumentError){
        res.status(400).json({error: error.message});
      }else {
        res.status(500).json({error: "Something were wrong trying to create a new Genially"});
      }
    }
  };
}

