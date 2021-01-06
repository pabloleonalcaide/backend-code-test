import request from "supertest";
import {v4 as uuidV4 } from "uuid";

import server from "../../../../src/api/server";

describe("Genially - Create resource", () => {
  afterEach(() => {
    server.close();
  });
  beforeEach(() => {
    server.close();
  });

  it("should create a new valid Genially", async () => {
    const response = await request(server)
    .post("/genially")
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .send({
      "id": uuidV4(),
      "name": "my_genially",
      "description": "with an awesome content"
    });
    expect(response.status).toEqual(201);
  });

  it("should return an error creating a new Genially with invalid params", async () => {
    const response = await request(server)
    .post("/genially")
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