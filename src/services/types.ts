export type Image = {
  url: string;
  title: string;
  altText: string;
  metadata: {
    dimensions: {
      width: number;
      height: number;
    };
  };
};

export type Color = {
  hex: string;
};

export type Card = {
  slug: string;
  subject: string;
  description: string;
  hideBorderMobile: boolean;
  hideBorderDesktop: boolean;
};
