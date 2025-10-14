import Markdown from "react-markdown";
import { cn } from "@/lib/utils";
import { Section } from "../section";
import type { HistoryProps } from "./section-history.types";

export function SectionHistory({ data }: HistoryProps) {
  if (!data) {
    return null;
  }

  const { id, content, headerBackgroundColor, headerTextColor } = data;
  return (
    <Section.Container className="lg:scroll-mt-15 lg:pb-4" id={id}>
      <Section.Header
        className={cn("flex flex-col items-center justify-center gap-4")}
        style={{
          backgroundColor: headerBackgroundColor
            ? headerBackgroundColor.hex
            : "#7B4B2A",
          color: headerTextColor ? headerTextColor.hex : "#fff",
        }}
      >
        <Section.Title noBorder>História</Section.Title>
      </Section.Header>

      <Section.Body
        className="space-y-10 text-justify text-lg/relaxed lg:text-2xl/relaxed"
        data-aos="fade-left"
      >
        <Markdown>{content}</Markdown>
      </Section.Body>
    </Section.Container>
  );
}
