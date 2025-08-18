import type { ComponentProps } from 'react';
import type { Contact } from '@/services/contact/types';
import type { Section } from '../section';

export type SectionContactProps = ComponentProps<typeof Section.Container> & {
  data: Contact;
};
