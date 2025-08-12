import type { ComponentProps } from 'react';

export type SectionProps = ComponentProps<'section'> & {
  backgroundImage?: string;
};
