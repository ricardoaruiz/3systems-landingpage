"use server";

import type { SanityDocument } from "next-sanity";
import { client } from "@/lib/sanity";
import { CONTACT_QUERY } from "./query";
import type { Contact } from "./types";

export async function getContact(): Promise<Contact> {
  const data = await client.fetch<SanityDocument<Contact>[]>(CONTACT_QUERY, {});
  return data[0];
}
