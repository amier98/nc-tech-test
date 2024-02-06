import { Request, Response } from "express";
import * as cardService from "../service/cardService";

export const getCards = async (req: Request, res: Response) => {
  const card = cardService.getCardData();

  res.json(card);
};
