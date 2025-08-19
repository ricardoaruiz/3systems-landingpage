'use client';

import { ChevronsUp } from 'lucide-react';
import { useScroll } from '@/hooks/useScroll';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export function GoToTopButtonView() {
  const { isOnTop } = useScroll();

  return (
    <div
      className="fixed right-4 bottom-4 z-50"
      data-aos={isOnTop ? 'fade-left' : 'fade-right'}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            className="flex size-12 cursor-pointer items-center justify-center rounded-full border border-zinc-500 bg-secondary-cristallo p-2 text-zinc-100 shadow-lg shadow-zinc-800 hover:bg-primary-cristallo md:size-16"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            type="button"
          >
            <ChevronsUp className="size-10" />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Voltar ao início</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
