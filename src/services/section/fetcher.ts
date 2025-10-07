"use server";

import type { SanityDocument } from "next-sanity";
import { client } from "@/lib/sanity";
import { SECTIONS_QUERY } from "./query";
import type { Section } from "./types";

export async function getSections(): Promise<Section[]> {
  const data = await client.fetch<SanityDocument<Section>[]>(
    SECTIONS_QUERY,
    {}
  );
  return data;
}
