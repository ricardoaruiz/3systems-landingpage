'use server';

import type { SanityDocument } from 'next-sanity';
import { client } from '@/lib/sanity';
import { HERO_QUERY } from './query';
import type { Hero } from './types';

export async function getHero(): Promise<Hero> {
  const data = await client.fetch<SanityDocument<Hero>[]>(HERO_QUERY, {});
  return data[0];
}
