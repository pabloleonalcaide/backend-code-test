import request from "supertest";
import {v4 as uuidV4 } from "uuid";

import Genially from "../../../../src/contexts/core/genially/domain/Genially";
import { randomGenially } from "./../../../context/core/genially/domain/GeniallyMother";
import server from "../../../../src/api/server";

describe("Genially - Edit resource", () => {
  afterEach(() => {
    server.close();
  });
  beforeEach(() => {
    server.close();
  });

  async function createAGenially(existingGenially: Genially) {
    await request(server)
      .post("/genially")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .send({
        "id": existingGenially.id,
        "name": existingGenially.name,
        "description": existingGenially.description
      });
  }

  it("should edit an existing Genially", async () => {
    const existingGenially: Genially = randomGenially();

    await createAGenially(existingGenially);

    const response = await request(server)
    .put("/genially")
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .send({
      "id": existingGenially.id,
      "name": "A different name",
      "description": existingGenially.description
    });
    expect(response.status).toEqual(200);
  });

  it("should return an error editing a Genially with invalid params", async () => {
    const existingGenially: Genially = randomGenially();

    await createAGenially(existingGenially);

    const response = await request(server)
    .put("/genially")
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .send({
      "id": uuidV4(),
      "name": "my_very_long_named_genially",
      "description": "with an awesome content"
    });
    expect(response.status).toEqual(400);
  });

  it("should return an error trying to edit a non existing Genially", async () => {
    const response = await request(server)
    .put("/genially")
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .send({
      "id": uuidV4(),
      "name": "my_very_long_named_genially",
      "description": "with an awesome content"
    });
    expect(response.status).toEqual(400);
  });
});