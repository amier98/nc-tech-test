import path from "path";
import card from "../data/cards.json";
import { Card } from "../model/cardData";
//const cardsDataPath = path.resolve(__dirname, '../data/cards.json');

export function getCardData() {
  const cardList = card.map((card) => {
    return {
      title: card.title,
      card_id: card.id,
    };
  });
  return cardList;
}
