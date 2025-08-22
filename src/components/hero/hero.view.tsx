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
  return (
    <section
      className={cn(
        'flex flex-col items-center gap-4 p-4',
        'lg:h-screen lg:justify-center lg:gap-8 lg:px-2',
        className
      )}
      style={{
        backgroundImage: `url(${backgroundImage?.url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      {...props}
    >
      {logo && (
        <div className="relative size-[140px] md:size-[320px]">
          <Image
            alt={logo.altText}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            src={logo.url}
          />
        </div>
      )}
      <h1 className="text-center font-bold text-2xl/snug text-primary-cristallo md:max-w-[1200px] md:text-6xl/snug">
        {title}
      </h1>

      <div className="h-[2px] w-full max-w-48 bg-tertiary-cristallo md:max-w-96" />

      <p className="text-center font-bold text-secondary-cristallo text-xl/snug md:max-w-[1200px] md:text-5xl/snug">
        {description}
      </p>
    </section>
  );
}
