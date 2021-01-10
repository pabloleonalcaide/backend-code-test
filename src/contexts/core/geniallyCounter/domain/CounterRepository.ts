import GeniallyCounter from "./GeniallyCounter";

export interface CounterRepository {

  save(counter: GeniallyCounter): Promise<GeniallyCounter>;

  get(): Promise<GeniallyCounter>;
}