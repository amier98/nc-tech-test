import { Request, Response } from "express";
import * as cardService from "../service/cardService";

export const getCards = async (req: Request, res: Response) => {
  const card = cardService.getCardData();

  res.json(card).status(200);
};

export const getCardById = async (req: Request, res: Response) => {
  const cardID = req.params.id;

  const card = cardService.getCardById(cardID);

  if (card) {
    res.json(card).status(200);
  } else {
    res.status(404).json("Card does not exist");
  }
};
