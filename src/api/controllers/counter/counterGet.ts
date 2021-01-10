import { Response, Request } from "express";

import container from "../../dependency-container/container";
import CounterFinder from "../../../contexts/core/geniallyCounter/application/CounterFinder";
import GeniallyCounter from "../../../contexts/core/geniallyCounter/domain/GeniallyCounter";

export class CounterGet {

  private counterFinder: CounterFinder;

  constructor() {
    this.counterFinder = new CounterFinder(container.get("genially.counter_repository"));
  }

  public find = async (req: Request, res: Response) => {

    try{
      const counter: GeniallyCounter = await this.counterFinder.execute();
      res.status(200).json({counter: counter.count});
    }catch(error){
      res.status(500).json({error: "Something were wrong trying to get the Genially Counter"});
    }


  }
}