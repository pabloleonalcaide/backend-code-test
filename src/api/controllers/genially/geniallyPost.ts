import { Response, Request } from "express";

import InMemoryGeniallyRepository from "../../../contexts/core/genially/infrastructure/InMemoryGeniallyRepository";
import CreateGeniallyService from "../../../contexts/core/genially/application/CreateGeniallyService";

export const create = async (req: Request, res: Response) => {
  // Service should be an injected dependency  (node-dependency-injection)
  const createService: CreateGeniallyService = new CreateGeniallyService(new InMemoryGeniallyRepository());
  try {
    // Consideer to dispatch a createGeniallyCommand to the CommandBus
    await createService.execute({
      id: req.body.id,
      name: req.body.name,
      description: req.body.description
    });
    res.status(201).json({ status: `Genially ${req.body.id} created` });
  } catch (error) {
    res.status(400).json(error);
  }
};
