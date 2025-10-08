"use server";

import type { SanityDocument } from "next-sanity";
import { client } from "@/lib/sanity";
import { HISTORY_QUERY } from "./query";
import type { History } from "./types";

export async function getHistory(): Promise<History> {
  const data = await client.fetch<SanityDocument<History>[]>(HISTORY_QUERY, {});
  return data[0];
}
