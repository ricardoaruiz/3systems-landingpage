import type { ComponentProps } from "react";
import type { Card } from "../ui/card";

export type CardContentProps = ComponentProps<typeof Card> & {
  title: string;
  description: string;
  hideBorderMobile?: boolean;
  hideBorderDesktop?: boolean;
};
