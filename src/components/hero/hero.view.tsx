import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { HeroProps } from './hero.types';

export function HeroView({
  title,
  description,
  logo,
  backgroundImage,
  className,
  ...props
}: HeroProps) {
  const hasBackgroundImage = !!backgroundImage;
  const backgroundImageStyle = hasBackgroundImage
    ? {
        backgroundImage: `url(${backgroundImage.url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }
    : undefined;

  return (
    <>
      {/* {logo && (
        <div className="flex items-center justify-center p-8 md:pt-20">
          <div className="relative h-[82px] w-[250px] md:h-[165px] md:w-[500px]">
            <Image
              alt={logo.altText}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              src={logo.url}
            />
          </div>
        </div>
      )} */}

      <section
        className={cn(
          'flex flex-col items-center gap-4 p-4',
          'lg:h-screen lg:justify-center lg:gap-8 lg:px-2',
          className,
          hasBackgroundImage ? 'relative overflow-hidden' : ''
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

        <div
          className={
            'relative z-10 flex w-full flex-col items-center gap-8 px-2 lg:gap-10 lg:px-5'
          }
        >
          {logo && (
            <div className="relative mb-0 h-[82px] w-[250px] md:h-[165px] md:w-[500px] lg:mb-20">
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
        </div>
      </section>
    </>
  );
}
