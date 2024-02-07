import card from "../data/cards.json";
import templates from "../data/templates.json";
import { Card, CardPreview } from "../model/cardData";
import { Template } from "../model/templateData";

export function getCardData(): CardPreview[] {
  try {
    const cardList = card.map((card: Card) => {
      const firstPageTemplateId = card.pages[0].templateId;
      const template = templates.find(
        (tem: Template) => tem.id === firstPageTemplateId
      );

      return {
        title: card.title,
        image_url: template.imageUrl,
        card_id: card.id,
      };
    });

    return cardList;
  } catch (error) {
    console.log("There has been an issue", error);
    return [];
  }
}

export function getCardById(id: string): Card | undefined {
  return card.find((c: Card) => c.id === id);
}
