import {InvalidArgumentError} from "../../../Shared/Domain/InvalidArgumentError";

export default class GeniallyDescription {

  readonly value: string;

  private readonly DESCRIPTION_LIMIT = 125;

  constructor(value: string){
    this.ensureDescriptionIsLessThanLimit(value);
    this.value = value;
  }

  private ensureDescriptionIsLessThanLimit(value: string): void {
    if(value.length > this.DESCRIPTION_LIMIT){
      throw new InvalidArgumentError(`The description - ${value} - exceed the limit of ${this.DESCRIPTION_LIMIT}`);
    }
  }
}