import request from "supertest";
import { app } from "../server";
import * as cardService from "../service/cardService";
import { Card, CardPreview } from "../model/cardData";

jest.mock("../service/cardService");

const cardDummyData = [
  {
    title: "card 1 title",
    image_url: "/front-cover-portrait-1.jpg",
    card_id: "card001",
  },
  {
    title: "card 2 title",
    image_url: "/front-cover-portrait-2.jpg",
    card_id: "card002",
  },
  {
    title: "card 3 title",
    image_url: "/front-cover-landscape.jpg",
    card_id: "card003",
  },
];

const cardIdDummyData = [
  {
    id: "card001",
    title: "card 1 title",
    sizes: ["sm", "md", "gt"],
    basePrice: 200,
    pages: [
      {
        title: "Front Cover",
        templateId: "template001",
      },
      {
        title: "Inside Left",
        templateId: "template002",
      },
      {
        title: "Inside Right",
        templateId: "template003",
      },
      {
        title: "Back Cover",
        templateId: "template004",
      },
    ],
  },
  {
    id: "card002",
    title: "card 2 title",
    sizes: ["md"],
    basePrice: 200,
    pages: [
      {
        title: "Front Cover",
        templateId: "template005",
      },
      {
        title: "Inside Left",
        templateId: "template002",
      },
      {
        title: "Inside Right",
        templateId: "template003",
      },
      {
        title: "Back Cover",
        templateId: "template004",
      },
    ],
  },
];

describe("GET /api/cards endpoint", () => {
  test("returns 200 status code if successful", async () => {
    const response = await request(app).get("/api/cards");

    expect(response.status).toBe(200);
  });

  test("returns empty array when there is no data", async () => {
    (cardService.getCardData as jest.Mock).mockReturnValue([]);

    const response = await request(app).get("/api/cards");

    expect(response.body.length).toBe(0);
    expect(response.body).toEqual([]);
  });

  test("returns cards successfully as an array", async () => {
    (cardService.getCardData as jest.Mock).mockReturnValue(cardDummyData);

    const response = await request(app).get("/api/cards");

    expect(response.body).toEqual(cardDummyData);
    expect(response.body.length).toBe(3);
  });
});

describe("GET /api/cards/id endpoint", () => {
  test("return 200 status code if successful", async () => {
    (cardService.getCardById as jest.Mock).mockReturnValue(cardIdDummyData);

    const response = await request(app).get("/api/cards/card002");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(cardIdDummyData);
  });

  test("return 404 status code if data does not exist", async () => {
    (cardService.getCardById as jest.Mock).mockReturnValue(null);

    const response = await request(app).get("/api/cards/card007");

    expect(response.status).toEqual(404);
  });
});
