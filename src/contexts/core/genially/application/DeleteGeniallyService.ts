import Genially from "../domain/Genially";
import GeniallyNotExist from "../domain/GeniallyNotExist";
import GeniallyRepository from "../domain/GeniallyRepository";

type DeleteGeniallyServiceRequest = {
  id: string;
}
export default class DeleteGeniallyService {
  constructor(private repository: GeniallyRepository) {}

  public async execute(req: DeleteGeniallyServiceRequest): Promise<Genially> {
    const { id } = req;
    const genially = await this.repository.find(id);

    this.ensureGeniallyDoesntExist(id, genially);
    genially.delete();
    this.repository.save(genially);
    return genially;
  }

  private ensureGeniallyDoesntExist(id: string, genially: Genially) {
    if (!genially) {
      throw new GeniallyNotExist(`The Genially this id ${id} doesn't exist`);
    }
  }
}
