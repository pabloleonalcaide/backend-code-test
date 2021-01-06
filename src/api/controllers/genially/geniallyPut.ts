import { Response, Request } from "express";

import container from "../../dependency-container/container";
 import Genially from "../../../contexts/core/genially/domain/Genially";
 import RenameGeniallyService from "../../../contexts/core/genially/application/RenameGeniallyService";

export const update = async (req: Request, res: Response) => {
 const renameService: RenameGeniallyService = new RenameGeniallyService(container.get("genially_repository"));
  try {
    // Consideer to dispatch a renameGeniallyCommand to the CommandBus
    const renamedGenially: Genially = await renameService.execute({
      id: req.body.id,
      name: req.body.name
    });
    res.status(200).json(renamedGenially);
  } catch (error) {
    res.status(400).json(error);
  }
};