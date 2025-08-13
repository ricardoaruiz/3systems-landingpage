import { CircleCheckIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '../ui/card';
import type { CardContentProps } from './card-content.types';

export function CardContentView({
  className,
  title,
  description,
  hideBorderMobile = false,
  hideBorderDesktop = false,
  ...props
}: CardContentProps) {
  return (
    <Card
      className={cn(
        { 'md:border-0 md:shadow-none': hideBorderDesktop },
        { 'border-0 shadow-none': hideBorderMobile },
        className
      )}
      {...props}
    >
      <CardContent>
        <div className="flex items-baseline gap-2">
          <div className="size-6 pt-1">
            <CircleCheckIcon className="text-green-600" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold text-xl/relaxed">{title}</p>
            <p className="text-base/relaxed">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
