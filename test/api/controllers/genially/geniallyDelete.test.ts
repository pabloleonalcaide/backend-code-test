import request from "supertest";
import {v4 as uuidV4 } from "uuid";

import Genially from "../../../../src/contexts/core/genially/domain/Genially";
import { randomGenially } from "./../../../context/core/genially/domain/GeniallyMother";
import server from "../../../../src/api/server";

describe("Genially - Delete Resource", () => {
  afterEach(() => {
    server.close();
  });
  beforeEach(() => {
    server.close();
  });
  beforeAll(() => {
    server.close();
  });
  it("should set as deleted an existing Genially", async () => {

    const existingGenially: Genially = randomGenially();

    await request(server)
      .post("/genially")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .send({
        "id": existingGenially.id,
        "name": existingGenially.name,
        "description": existingGenially.description
      });
    const response = await request(server)
    .delete("/genially")
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .send({
      "id": existingGenially.id,
    });
    expect(response.status).toEqual(202);
  });

  it("should return error trying to delete a non existing Genially", async () => {
    const response = await request(server)
    .delete("/genially")
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .send({
      "id": uuidV4()
    });

    expect(response.status).toEqual(403);
  });
});
