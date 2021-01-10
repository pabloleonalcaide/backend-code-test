import {CounterRepository} from "../domain/CounterRepository";
import GeniallyCounter from "../domain/GeniallyCounter";
export default class CounterUpdater {

  constructor(private repository: CounterRepository){}

  public async execute(): Promise<GeniallyCounter> {

    const counter = await this.repository.get();
    counter.increase();
    return await this.repository.save(counter);
  }
}