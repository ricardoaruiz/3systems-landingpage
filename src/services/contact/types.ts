import type { Color, Image } from '../types';

export type Contact = {
  id: string;
  disclamer: string;
  disclamerBackgroundColor: Color;
  disclamerTextColor: Color;
  leftImage: Image;
  contactName: string;
  contactEmailImage: Image;
  contactEmail: string;
  contactEmailHref?: string;
  contactPhoneImage: Image;
  contactPhone: string;
  contactPhoneHref?: string;
  rightImage: Image;
};
