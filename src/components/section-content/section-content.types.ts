import type { ComponentProps } from "react";
import type { Section as SectionType } from "@/services/section";
import type { Section } from "../section";

export type SectionContentProps = ComponentProps<typeof Section.Container> & {
  data: SectionType;
};
