'use server';

import type { SanityDocument } from 'next-sanity';
import { client } from '@/lib/sanity';
import { MENU_QUERY } from './query';
import type { MenuItem } from './types';

export async function getMenu(): Promise<MenuItem[]> {
  const data = await client.fetch<SanityDocument<MenuItem>[]>(MENU_QUERY, {});
  return data;
}
