import GeniallyCounter from "../domain/GeniallyCounter";
import { CounterRepository } from "./../domain/CounterRepository";


export default class InMemoryCounterRepository implements CounterRepository {
  private counter: GeniallyCounter = new GeniallyCounter(0);

  async save(counter: GeniallyCounter): Promise<GeniallyCounter>{
    this.counter = counter;
    return await this.counter;
  }

  async get(): Promise<GeniallyCounter>{
    return await this.counter;
  }
}