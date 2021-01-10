import GeniallyCounter from "./GeniallyCounter";

export interface CounterRepository {

  increase(): Promise<GeniallyCounter>;

  get(): Promise<GeniallyCounter>;
}