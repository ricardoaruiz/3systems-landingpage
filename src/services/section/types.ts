export type Section = {
  id: string;
  slug: string;
  subject: string;
  color: Color;
  textColor: Color;
  description: string;
  cards: Card[];
  sideContent: SideContent;
};

type Card = {
  slug: string;
  subject: string;
  description: string;
  hideBorderMobile: boolean;
  hideBorderDesktop: boolean;
};

type SideContent = {
  image: Image;
  description: string;
};

type Image = {
  url: string;
  title: string;
  altText: string;
};

type Color = {
  hex: string;
};
