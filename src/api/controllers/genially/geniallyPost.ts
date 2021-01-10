import { Response, Request } from "express";
import container from "../../dependency-container/container";
import CreateGeniallyService from "../../../contexts/core/genially/application/CreateGeniallyService";
import DatabaseError from "../../../contexts/Shared/Domain/DatabaseError";

export const create = async (req: Request, res: Response) => {
  // Service should be an injected dependency  (node-dependency-injection)
  const createService: CreateGeniallyService = new CreateGeniallyService(container.get("genially_repository"), container.get("genially_event_bus"));
  try {
    // Consideer to dispatch a createGeniallyCommand to the CommandBus
    await createService.execute({
      id: req.body.id,
      name: req.body.name,
      description: req.body.description
    });
    res.status(201).json({ status: `Genially ${req.body.id} created` });
  } catch (error) {
    const status = (error instanceof DatabaseError) ? 500 : 400;
    res.status(status).json({error: error.message});
  }
};
