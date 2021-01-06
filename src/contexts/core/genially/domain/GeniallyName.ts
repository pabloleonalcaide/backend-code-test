import {InvalidArgumentError} from "../../../Shared/Domain/InvalidArgumentError";

export default class GeniallyName {
  readonly value: string;

  private readonly NAME_MIN_LENGTH = 3;
  private readonly NAME_MAX_LENGTH = 20;

  constructor(value: string){
    this.ensureNameHasValidLength(value);
    this.value = value;
  }

  private ensureNameHasValidLength(name: string): void {
    if(name.length > this.NAME_MAX_LENGTH || name.length < this.NAME_MIN_LENGTH){
      throw new InvalidArgumentError(`The name - ${name} - has an invalid length, consideer someone between ${this.NAME_MAX_LENGTH} and ${this.NAME_MIN_LENGTH}`);
    }
  }
}