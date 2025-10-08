import type { ComponentProps } from "react";
import type { Hero } from "@/services";

export type HeroProps = ComponentProps<"section"> & {
  data: Hero;
};
