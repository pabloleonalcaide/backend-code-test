import {InvalidArgumentError} from "../../../Shared/Domain/InvalidArgumentError";

export default class GeniallyId {
  readonly value: string;

  constructor(value: string) {
    this.ensureIdIsValid(value);
    this.value = value;
  }

  private ensureIdIsValid(value: string): void {
    // Considering the possibility of extends from a Shared VO UUID who imports a external library
    if (!value.length) {
      throw new InvalidArgumentError(`The id doesn't allow the value <${value}>`);
    }
  }
}