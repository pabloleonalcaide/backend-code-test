import container from "../../../../../src/api/dependency-container/container";

import CreateGeniallyService from "../../../../../src/contexts/core/genially/application/CreateGeniallyService";
import RenameGeniallyService from "../../../../../src/contexts/core/genially/application/RenameGeniallyService";
import Genially from "../../../../../src/contexts/core/genially/domain/Genially";
import GeniallyNotExist from "../../../../../src/contexts/core/genially/domain/GeniallyNotExist";

import { randomGenially, randomId } from "../domain/GeniallyMother";

describe("Rename Genially Service - Unit Test", () => {

  it("Should mark as deleted an existing Genially", async () => {

    const someGenially: Genially = randomGenially();
    const newName = "Another name";
    const repository = container.get("genially_repository");
    const eventBus = container.get("genially_event_bus");

    const createService = new CreateGeniallyService(repository, eventBus);
    const renameService = new RenameGeniallyService(repository);

    const createdGenially = await createService.execute({id: someGenially.id, name: someGenially.name, description: someGenially.description});

    const renamedGenially = await renameService.execute({id: createdGenially.id, name: newName});

    expect(renamedGenially.modifiedAt).toBeTruthy();
    expect(renamedGenially.name).toEqual(newName);

  });

  it("Should throw an error trying to rename a non existing Genially", async () => {

    const renameService = new RenameGeniallyService(container.get("genially_repository"));

    await expect(renameService.execute({id: randomId(), name: "some name"})).rejects.toThrow(GeniallyNotExist);

  });
});