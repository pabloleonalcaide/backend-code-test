import Genially from "../domain/Genially";
import GeniallyNotExist from "../domain/GeniallyNotExist";
import GeniallyRepository from "../domain/GeniallyRepository";


export default class DeleteGeniallyService {
  constructor(private repository: GeniallyRepository) {}

  public async execute(id: string): Promise<Genially> {
    const genially = await this.repository.find(id);

    this.ensureGeniallyDoesntExist(genially);

    genially.delete();
    this.repository.save(genially);
    return genially;
  }



  private ensureGeniallyDoesntExist(genially: Genially) {
    console.log("ENSURE... ===> ");
    console.log({genially});
    if (!genially) {
      throw new GeniallyNotExist("This Genially doesn't exist");
    }
  }
}
