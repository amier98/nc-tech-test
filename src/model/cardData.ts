export interface Card {
  id: string;
  title: string;
  sizes: string[];
  basePrice: number;
  pages: Page[];
}

export interface Page {
  title: string;
  templateId: string;
}

export interface CardPreview {
  title: string;
  card_id: string;
  image_url: string;
}
