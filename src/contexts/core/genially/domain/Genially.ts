import {InvalidArgumentError} from "../../../Shared/Domain/InvalidArgumentError";

export default class Genially {
  private _id: string;
  private _name: string;
  private _description: string;
  private _createdAt: Date;
  private _modifiedAt: Date;
  private _deletedAt: Date;

  private readonly DESCRIPTION_LIMIT = 125;
  private readonly NAME_MIN_LENGTH = 3;
  private readonly NAME_MAX_LENGTH = 20;


  constructor(id: string, name: string, description?: string) {
    this.ensureNameHasValidLength(name);
    this.ensureDescriptionIsLessThanLimit(description);

    this._id = id;
    this._name = name;
    this._description = description;
    this._createdAt = new Date();
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get modifiedAt(): Date {
    return this._modifiedAt;
  }

  get deletedAt(): Date {
    return this._deletedAt;
  }

  delete(): void {
    // should be more restrictive or simply override the date?
    this._deletedAt = this._deletedAt ? this._deletedAt : new Date();
  }

  rename(newName: string): void {
    this.ensureNameHasValidLength(newName);
    this._name = newName;
    this._modifiedAt = new Date();
  }

  private ensureNameHasValidLength(name: string): void {
    if(name.length > this.NAME_MAX_LENGTH || name.length < this.NAME_MIN_LENGTH){
      throw new InvalidArgumentError(`The name - ${name} - has an invalid length, consideer someone between ${this.NAME_MAX_LENGTH} and ${this.NAME_MIN_LENGTH}`);
    }
  }
  private ensureDescriptionIsLessThanLimit(description: string): void {
    if(description.length > this.DESCRIPTION_LIMIT){
      throw new InvalidArgumentError(`The description - ${description} - exceed the limit of ${this.DESCRIPTION_LIMIT}`);
    }
  }
}
