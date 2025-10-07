"use server";

import type { SanityDocument } from "next-sanity";
import { client } from "@/lib/sanity";
import { CALL_TO_ACTION_QUERY } from "./query";
import type { CallToAction } from "./types";

export async function getCallToAction(): Promise<CallToAction> {
  const data = await client.fetch<SanityDocument<CallToAction>[]>(
    CALL_TO_ACTION_QUERY,
    {}
  );
  return data[0];
}
