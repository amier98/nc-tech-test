import path from "path";
import card from "../data/cards.json";
import { Card } from "../model/cardData";
//const cardsDataPath = path.resolve(__dirname, '../data/cards.json');

export function getCardData() {
  console.log(card);
  return card;
}
