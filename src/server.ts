import express from "express";
import cardRoute from "./route/route";

export const app = express();

app.set("json spaces", 2);

app.use("/api", cardRoute);
// respond with a list of cards

app.get("/cards/:cardId/:sizeId?", () => {
  // respond with card by id
});
