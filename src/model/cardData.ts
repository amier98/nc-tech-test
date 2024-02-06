export interface Card {
  id: string;
  title: string;
  sizes: string[];
  baseprice: number;
  pages: Page[];
}

export interface Page {
  title: string;
  templateId: string;
}
