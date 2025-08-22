import type { Image } from '../types';

export type Hero = {
  title: string;
  description?: string;
  backgroundImage?: Image;
  logo?: Image;
};
