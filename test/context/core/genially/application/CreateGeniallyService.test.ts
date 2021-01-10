import container from "../../../../../src/api/dependency-container/container";

import CreateGeniallyService from "../../../../../src/contexts/core/genially/application/CreateGeniallyService";
import Genially from "../../../../../src/contexts/core/genially/domain/Genially";
import { InvalidArgumentError } from "../../../../../src/contexts/Shared/Domain/InvalidArgumentError";

import { randomGenially, randomId, wrongParams } from "../domain/GeniallyMother";

describe("Create Genially Service - Unit Test", () => {

  it("Should return a new valid Genially", async () => {

    const expectedGenially: Genially = randomGenially();
    const expectedFields = {
      id: expectedGenially.id,
      name: expectedGenially.name,
      description: expectedGenially.description
     };

    const service = new CreateGeniallyService(container.get("genially_repository"), container.get("genially_event_bus"));

    const someGenially = await service.execute({id: expectedGenially.id, name: expectedGenially.name, description: expectedGenially.description});

    expect(someGenially).toBeInstanceOf(Genially);
    expect(someGenially).toEqual(expect.objectContaining(expectedFields));
  });

  it("Should throw an error when description is invalid", async () => {

    const request = {id: randomId(), name: "awesome name", description: wrongParams.wrongDescription};

    const service = new CreateGeniallyService(container.get("genially_repository"), container.get("genially_event_bus"));

    await expect(service.execute(request)).rejects.toThrow(InvalidArgumentError);

  });

  it("Should throw an error when description is invalid", async () => {
    const wrongName = Math.floor(Math.random()) ? wrongParams.wrongLongName : wrongParams.wrongShortName;
    const request = {id: randomId(), name: wrongName, description: "nice description"};

    const service = new CreateGeniallyService(container.get("genially_repository"), container.get("genially_event_bus"));

    await expect(service.execute(request)).rejects.toThrow(InvalidArgumentError);

  });
});