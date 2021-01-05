import request from "supertest";
import server from "../../../../src/api/server";

describe("HealthCheck", () => {
  afterAll(() => {
    server.close();
  });
  it("should return OK status", async () => {
    const response = await request(server)
    .get("/");
    expect(response.status).toEqual(200);
  });
});