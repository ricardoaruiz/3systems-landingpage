import type { StaticImageData } from 'next/image';
import type { ComponentProps } from 'react';

export type SideContentProps = ComponentProps<'aside'> & {
  image?: string | StaticImageData;
  alt?: string;
};
