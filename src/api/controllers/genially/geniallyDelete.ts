import { Response, Request } from "express";

import container from "../../dependency-container/container";
import DeleteGeniallyService from "../../../contexts/core/genially/application/DeleteGeniallyService";
import GeniallyNotExist from "../../../contexts/core/genially/domain/GeniallyNotExist";
import Genially from "../../../contexts/core/genially/domain/Genially";


export const remove = async (req: Request, res: Response) => {
  // Service should be an injected dependency  (node-dependency-injection)
  const deleteService: DeleteGeniallyService = new DeleteGeniallyService(container.get("genially_repository"));

  try {
    // Consideer to dispatch a deleteGeniallyCommand to the CommandBus
    const deletedGenially: Genially = await deleteService.execute({id: req.body.id});
    res.status(202).json({ status: `Genially ${req.body.id} deleted at ${deletedGenially.deletedAt}` });

  } catch (error) {
    const status = error instanceof GeniallyNotExist ? 403 : 500;
      res.status(status).json({error: error.message});
  }
};
