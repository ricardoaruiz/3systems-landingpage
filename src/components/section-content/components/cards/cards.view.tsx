'use client';

import { CardContent } from '@/components/card-content';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import type { CardsProps } from './cards.types';

export function CardsView({ data, hasSideContent }: CardsProps) {
  const { isAboveLg } = useMediaQuery();

  return (
    <div
      className={cn('flex w-full flex-2/3 flex-col gap-3', {
        'lg:grid lg:grid-cols-2 lg:gap-6': !hasSideContent,
      })}
    >
      {data.map(({ slug, subject, ...rest }, index) => {
        const showLeftAnimation =
          !hasSideContent && isAboveLg && index % 2 !== 0;
        const dataAos = showLeftAnimation ? 'fade-left' : 'fade-right';

        return (
          <CardContent
            data-aos={dataAos}
            key={slug}
            title={subject}
            {...rest}
          />
        );
      })}
    </div>
  );
}
