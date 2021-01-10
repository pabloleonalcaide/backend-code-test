import GeniallyCounter from "../domain/GeniallyCounter";
import { CounterRepository } from "./../domain/CounterRepository";


export default class InMemoryCounterRepository implements CounterRepository {
  private counter: GeniallyCounter = new GeniallyCounter(0);

  async increase(): Promise<GeniallyCounter>{
    this.counter.increase();
    return await this.counter;
  }

  async get(): Promise<GeniallyCounter>{
    return await this.counter;
  }
}