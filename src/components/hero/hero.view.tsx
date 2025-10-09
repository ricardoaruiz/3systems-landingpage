import Image from "next/image";
import { cn } from "@/lib/utils";
import type { HeroProps } from "./hero.types";

export function HeroView({ data, className, ...props }: HeroProps) {
  if (!data) {
    return null;
  }

  const { title, description, logo, backgroundImage } = data;
  const hasBackgroundImage = !!backgroundImage;
  const backgroundImageStyle = hasBackgroundImage
    ? {
        backgroundImage: `url(${backgroundImage.url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }
    : undefined;

  return (
    <section
      className={cn(
        "relative flex flex-col items-center gap-4 p-4",
        "h-screen min-h-fit justify-start lg:justify-center lg:gap-8 lg:px-2",
        className,
        hasBackgroundImage ? "relative overflow-hidden" : ""
      )}
      {...props}
    >
      {hasBackgroundImage && (
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0"
          style={backgroundImageStyle}
        />
      )}

      <div className="container relative z-10 mx-auto flex w-full flex-1 flex-col items-center gap-8 px-2 lg:justify-center lg:gap-10 lg:px-5">
        {logo && (
          <div className="relative mt-20 mb-10 h-[82px] w-[250px] md:h-[165px] md:w-[500px] lg:mt-0">
            <Image
              alt={logo.altText}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              src={logo.url}
            />
          </div>
        )}
        <h1 className="text-center font-bold text-2xl/snug text-primary-3systems md:max-w-[1200px] md:text-6xl/snug">
          {title}
        </h1>

        {!!description && (
          <div className="h-[2px] w-full max-w-48 bg-primary-3systems md:max-w-96" />
        )}

        <p className="text-center font-bold text-secondary-3systems text-xl/snug md:max-w-[1200px] md:text-5xl/snug">
          {description}
        </p>

        {/* Carimbo mobile */}
        <a
          href="https://www.aesas.com.br"
          rel="noreferrer noopener"
          target="_blank"
        >
          <div
            className="relative size-35 opacity-50 lg:mt-10 lg:hidden lg:size-60"
            style={{
              filter:
                "grayscale(1) contrast(2) drop-shadow(0 2px 8px rgba(0,0,0,0.25))",
              mixBlendMode: "multiply",
            }}
          >
            <Image alt="Aesas Logo" fill src="/images/logo_aesas.webp" />
          </div>

          {/* Carimbo desktop */}
          <div
            className="absolute top-20 right-0 hidden size-40 rotate-[20deg] opacity-50 transition-transform duration-200 hover:scale-105 lg:block"
            style={{
              filter:
                "grayscale(1) contrast(2) drop-shadow(0 2px 8px rgba(0,0,0,0.25))",
              mixBlendMode: "multiply",
            }}
          >
            <Image alt="Aesas Logo" fill src="/images/logo_aesas.webp" />
          </div>
        </a>
      </div>
    </section>
  );
}
