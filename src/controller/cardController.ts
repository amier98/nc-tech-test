import { Request, Response } from "express";
import * as cardService from "../service/cardService";

export const getCards = async (req: Request, res: Response) => {
  const card = cardService.getCardData();

  res.json(card).status(200);
};

export const getCardById = async (req: Request, res: Response) => {
  const cardID = req.params.id;

  const card = cardService.getCardById(cardID);

  console.log(card);

  res.json(card);
};
