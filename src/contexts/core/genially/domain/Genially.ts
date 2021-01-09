import GeniallyName from "./GeniallyName";
import GeniallyDescription from "./GeniallyDescription";
import GeniallyId from "./GeniallyId";

export default class Genially {
  private _id: GeniallyId;
  private _name: GeniallyName;
  private _description: GeniallyDescription;
  private _createdAt: Date;
  private _modifiedAt: Date;
  private _deletedAt: Date;


  constructor(id: GeniallyId, name: GeniallyName, description?: GeniallyDescription) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._createdAt = new Date();
  }

  get id(): string {
    return this._id.value;
  }

  get name(): string {
    return this._name.value;
  }

  get description(): string {
    return this._description.value;
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
    this._name = new GeniallyName(newName);
    this._modifiedAt = new Date();
  }

  public static fromPrimitives(
    id: string,
    name: string,
    description?: string,
    createdAt: Date,
    modifiedAt?: Date,
    deletedAt?: Date
  ): Genially{
    const genially = new Genially(new GeniallyId(id), new GeniallyName(name), new GeniallyDescription(description));
    genially._createdAt = createdAt;
    genially._deletedAt = deletedAt;
    genially._modifiedAt = modifiedAt;
    return genially;
  }

  public toPrimitives = () => {
    return {
      _id: this._id.value,
      name: this._name.value,
      description: this._description.value ? this._description.value : "",
      createdAt: this._createdAt ? this._createdAt : null,
      modifiedAt: this._modifiedAt ? this._modifiedAt : null,
      deletedAt: this._deletedAt ? this._deletedAt : null
    };
  };
}
