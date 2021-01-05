import request from "supertest";
import {v4 as uuidV4 } from "uuid";

import server from "../../../../src/api/server";

describe("Genially", () => {
  afterAll(() => {
    server.close();
  });

  it("should create a new valid Genially", async () => {
    const response = await request(server)
    .post("/genially")
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .send({
      "id": uuidV4(),
      "name": "my genially",
      "description": "with an awesome content"
    });
    expect(response.status).toEqual(201);
  });
});