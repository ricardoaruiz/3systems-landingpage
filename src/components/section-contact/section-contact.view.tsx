import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Section } from '../section';
import type { SectionContactProps } from './section-contact.types';

export function SectionContactView({
  data,
  className,
  ...props
}: SectionContactProps) {
  const disclamerBackgroundColorStyle = data.disclamerBackgroundColor
    ? { backgroundColor: data.disclamerBackgroundColor.hex }
    : {};
  const disclamerTextColorStyle = data.disclamerTextColor
    ? { color: data.disclamerTextColor.hex }
    : {};

  return (
    <Section.Container
      className={cn('bg-zinc-200', className)}
      id={data.id}
      style={{
        ...disclamerBackgroundColorStyle,
        ...disclamerTextColorStyle,
      }}
      {...props}
    >
      <Section.Body className="flex flex-col items-center justify-center gap-4 px-0 pb-0 md:max-w-full md:gap-8">
        <p
          className="w-full max-w-96 px-4 py-6 text-center font-semibold text-lg/relaxed text-primary-cristallo md:max-w-[1200px] md:px-8 md:pb-8 md:text-3xl/relaxed"
          style={{
            ...disclamerBackgroundColorStyle,
            ...disclamerTextColorStyle,
          }}
        >
          {data.disclamer}
        </p>

        <div className="flex w-full flex-col items-center justify-center gap-4 bg-zinc-100 px-4 pt-4 md:flex-row lg:gap-12 lg:pt-0">
          <div
            className="relative"
            style={{
              width: `${data.leftImage.metadata.dimensions.width}px`,
              height: `${data.leftImage.metadata.dimensions.height}px`,
            }}
          >
            <Image
              alt={data.leftImage.altText}
              className="h-auto w-full"
              fill
              quality={100}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              src={data.leftImage.url}
            />
          </div>
          <div className="lg:-mt-12 space-y-3" data-aos="fade-right">
            <p className="text-center font-semibold text-2xl/relaxed text-primary-cristallo ">
              {data.contactName}
            </p>
            <div className="flex justify-center gap-2 text-primary-cristallo md:items-center md:justify-start">
              <Image
                alt={data.contactEmailImage.altText}
                height={data.contactEmailImage.metadata.dimensions.height}
                quality={100}
                src={data.contactEmailImage.url}
                width={data.contactEmailImage.metadata.dimensions.width}
              />

              <p className="text-center font-semibold text-xl/relaxed ">
                {data.contactEmail}
              </p>
            </div>
            <div className="flex justify-center gap-2 text-primary-cristallo md:items-center md:justify-start">
              <Image
                alt={data.contactPhoneImage.altText}
                height={data.contactPhoneImage.metadata.dimensions.height}
                quality={100}
                src={data.contactPhoneImage.url}
                width={data.contactPhoneImage.metadata.dimensions.width}
              />
              <p className="text-center font-semibold text-base/relaxed text-primary-cristallo ">
                {data.contactPhone}
              </p>
            </div>
          </div>

          <div
            className="relative"
            data-aos="fade-left"
            style={{
              width: `${data.rightImage.metadata.dimensions.width}px`,
              height: `${data.rightImage.metadata.dimensions.height}px`,
            }}
          >
            <Image
              alt={data.rightImage.altText}
              className="h-auto w-full"
              fill
              quality={100}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              src={data.rightImage.url}
            />
          </div>
        </div>
      </Section.Body>
    </Section.Container>
  );
}
