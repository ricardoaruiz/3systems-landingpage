"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import type { NavLinkProps } from "./nav-link.types";

export function NavLinkView(props: NavLinkProps) {
  return (
    <Link
      className={cn(
        "cursor-pointer font-semibold text-xl text-zinc-100 transition-all hover:text-primary-3-3systems"
      )}
      {...props}
    />
  );
}
