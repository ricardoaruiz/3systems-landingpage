import { CheckIcon } from "lucide-react";
import Markdown from "react-markdown";
import { cn } from "@/lib/utils";
import { Section } from "../section";
import type { HistoryProps } from "./section-history.types";

export function SectionHistory({ data }: HistoryProps) {
  if (!data) {
    return null;
  }

  const { id, content, schools, headerBackgroundColor, headerTextColor } = data;
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
        className="space-y-10 text-lg/relaxed lg:text-2xl/relaxed"
        data-aos="fade-left"
      >
        <Markdown>{content}</Markdown>

        {schools && schools.length > 0 && (
          <>
            <h2 className="my-0 font-bold text-xl/relaxed lg:text-2xl/relaxed">
              Formação Acadêmica
            </h2>
            <ul className="my-6 ml-6 [&>li]:mt-2">
              {schools.map(({ content: schoolContent }) => (
                <li className="flex items-center gap-2" key={schoolContent}>
                  <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-2-3systems">
                    <CheckIcon className="size-4 text-white" />
                  </div>
                  {schoolContent}
                </li>
              ))}
            </ul>
          </>
        )}
      </Section.Body>
    </Section.Container>
  );
}
