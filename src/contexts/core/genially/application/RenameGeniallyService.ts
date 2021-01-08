import GeniallyNotExist from "../domain/GeniallyNotExist";
import GeniallyRepository from "../domain/GeniallyRepository";
import Genially from "../domain/Genially";

type RenameGeniallyRequest = {
  id: string;
  name: string;
}
export default class RenameGeniallyService {

  constructor(private repository: GeniallyRepository) {}

  public async execute(request: RenameGeniallyRequest): Promise<Genially> {
     const {id, name} = request;
     const genially = await this.repository.find(id);

    this.ensureGeniallyDoesntExist(genially);

    genially.rename(name);

    await this.repository.save(genially);

    return genially;
  }

  private ensureGeniallyDoesntExist(genially: Genially) {
    if (!genially) {
      throw new GeniallyNotExist("This Genially doesn't exist");
    }
  }
}
