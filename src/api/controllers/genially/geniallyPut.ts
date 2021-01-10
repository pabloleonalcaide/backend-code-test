import { Response, Request } from "express";

import container from "../../dependency-container/container";
import Genially from "../../../contexts/core/genially/domain/Genially";
import GeniallyNotExist from "../../../contexts/core/genially/domain/GeniallyNotExist";
import {InvalidArgumentError} from "../../../contexts/Shared/Domain/InvalidArgumentError";
import RenameGeniallyService from "../../../contexts/core/genially/application/RenameGeniallyService";

export class GeniallyPut {
  private renameService: RenameGeniallyService;

  constructor(){
    this.renameService = new RenameGeniallyService(container.get("genially_repository"));
  }

  public update = async (req: Request, res: Response) => {

    try {
      // Consideer to dispatch a renameGeniallyCommand to the CommandBus
      const renamedGenially: Genially = await this.renameService.execute({
        id: req.body.id,
        name: req.body.name
      });
      res.status(200).json({ status: `Genially ${renamedGenially.id} renamed` });
    } catch (error) {
      if(error instanceof GeniallyNotExist || error instanceof InvalidArgumentError){
        res.status(400).json({error: error.message});
      }else{
        res.status(500).json({error: "Something were wrong trying to edit the Genially"});
      }
    }
  };
}

