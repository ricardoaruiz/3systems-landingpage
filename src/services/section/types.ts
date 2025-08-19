import type { Card, Color, Image } from '../types';

export type Section = {
  id: string;
  slug: string;
  subject: string;
  color: Color;
  textColor: Color;
  description?: string;
  cards: Card[];
  sideContent?: SideContent;
};

type SideContent = {
  image: Image;
  description: string;
};
