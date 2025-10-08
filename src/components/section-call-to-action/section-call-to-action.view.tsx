import Image from "next/image";
import { Section } from "../section";
import type { SectionCallToActionProps } from "./section-call-to-action.types";

export function SectionCallToActionView({
  data,
  ...props
}: SectionCallToActionProps) {
  if (!data) {
    return null;
  }

  const { id, mainImage, backgroundImage, mainText, color, textColor } = data;
  const backgroundStyle = color ? { backgroundColor: color.hex } : {};
  const textColorStyle = textColor ? { color: textColor.hex } : {};

  return (
    <Section.Container
      backgroundImage={backgroundImage?.url}
      className="text-zinc-50"
      id={id}
      style={{ ...backgroundStyle, ...textColorStyle }}
      {...props}
    >
      <Section.Body className="flex flex-col items-center justify-center p-4 pb-0 md:gap-8 md:p-8 md:pb-0">
        <p className="w-full max-w-96 text-center font-bold text-2xl/relaxed md:max-w-[690px] md:text-5xl/relaxed lg:max-w-[900px]">
          {mainText}
        </p>

        {mainImage && (
          <div className="relative h-[296px] w-[198px] md:h-[537px] md:w-[358px]">
            <Image
              alt={mainImage.altText}
              fill
              quality={100}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              src={mainImage.url}
            />
          </div>
        )}
      </Section.Body>
    </Section.Container>
  );
}
