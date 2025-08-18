import type { ComponentProps } from 'react';
import type { MenuItem } from '@/services/menu/types';

export type HeaderProps = ComponentProps<'header'> & {
  menu: MenuItem[];
};
