import type { ComponentProps } from 'react';

export type SectionTitleProps = ComponentProps<'h2'> & {
  noBorder?: boolean;
};
