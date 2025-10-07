import type { Color, Image } from "../types";

export type Contact = {
  id: string;
  disclamer: string;
  disclamerBackgroundColor?: Color;
  disclamerTextColor?: Color;
  leftImage?: Image;
  contactCompanyName?: string;
  contactCompanyNameLinkedinHref?: string;
  contactName: string;
  contactNameLinkedinHref?: string;
  contactEmail: string;
  contactEmailHref: string;
  contactPhone: string;
  contactPhoneHref: string;
  rightImage?: Image;
};
