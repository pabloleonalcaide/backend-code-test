import { Response, Request } from "express";

export const create = (req: Request, res: Response) => {
  res.status(201).send({ status: "ok" });
};
