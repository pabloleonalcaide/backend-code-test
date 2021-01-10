import {CounterRepository} from "../domain/CounterRepository";
import GeniallyCounter from "../domain/GeniallyCounter";

export default class CounterFinder {

  constructor(private repository: CounterRepository){}

  public async execute(): Promise<GeniallyCounter> {

    const counter = await this.repository.get();

    return counter;
  }
}