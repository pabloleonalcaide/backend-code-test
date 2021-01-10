import container from "../../../../../src/api/dependency-container/container";

import CreateGeniallyService from "../../../../../src/contexts/core/genially/application/CreateGeniallyService";
import DeleteGeniallyService from "../../../../../src/contexts/core/genially/application/DeleteGeniallyService";
import Genially from "../../../../../src/contexts/core/genially/domain/Genially";
import GeniallyNotExist from "../../../../../src/contexts/core/genially/domain/GeniallyNotExist";

import { randomGenially, randomId } from "../domain/GeniallyMother";

describe("Delete Genially Service - Unit Test", () => {

  it("Should mark as deleted an existing Genially", async () => {

    const expectedGenially: Genially = randomGenially();
    const repository = container.get("genially_repository");
    const eventBus = container.get("genially_event_bus");
    const createService = new CreateGeniallyService(repository, eventBus);
    const deleteService = new DeleteGeniallyService(repository);

    const createdGenially = await createService.execute({id: expectedGenially.id, name: expectedGenially.name, description: expectedGenially.description});

    const deletedGenially = await deleteService.execute({id: createdGenially.id});

    expect(deletedGenially.deletedAt).toBeTruthy();

  });

  it("Should throw an error trying to delete a non existing Genially", async () => {

    const deleteService = new DeleteGeniallyService(container.get("genially_repository"));

    await expect(deleteService.execute({id: randomId()})).rejects.toThrow(GeniallyNotExist);

  });
});