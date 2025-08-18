import type { Color, Image } from '../types';

export type CallToAction = {
  id: string;
  mainText: string;
  mainImage: Image;
  backgroundImage: Image;
  color: Color;
  textColor: Color;
};
