import request from "supertest";
import { app } from "../server";

describe("GET /api/cards endpoint", () => {
  test("returns 200 status code if successful", async () => {
    const response = await request(app).get("/api/cards");

    expect(response.status).toBe(200);
  });
});
