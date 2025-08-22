'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import whatsappIcon from '../../../public/images/wa_icon.webp';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import type { WhatsAppButtonViewProps } from './whatsapp-button.types';

export function WhatsAppButtonView({
  className,
  ...props
}: WhatsAppButtonViewProps) {
  return (
    <div className="fixed right-4 bottom-20 z-50 lg:bottom-24">
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            className={cn(
              'flex size-12 animate-pulse cursor-pointer items-center justify-center rounded-full border border-zinc-500 bg-secondary-cristallo p-2 text-zinc-100 shadow-lg shadow-zinc-800 hover:bg-primary-cristallo md:size-16',
              className
            )}
            rel="noopener noreferrer"
            target="_blank"
            {...props}
          >
            <Image
              alt="WhatsApp icone"
              height={48}
              src={whatsappIcon}
              width={48}
            />
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>Fale conosco no WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
