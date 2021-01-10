import {CounterRepository} from "../domain/CounterRepository";
import GeniallyCounter from "../domain/GeniallyCounter";
export default class CounterUpdater {

  constructor(private repository: CounterRepository){}

  public async execute(): Promise<GeniallyCounter> {
    return await this.repository.increase();
  }
}