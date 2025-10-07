import Image from 'next/image';
import Markdown from 'react-markdown';
import { cn } from '@/lib/utils';
import { Section } from '../section';
import type { SectionContactProps } from './section-contact.types';

export function SectionContactView({
  data,
  className,
  ...props
}: SectionContactProps) {
  if (!data) {
    return null;
  }

  const disclamerBackgroundColorStyle = data.disclamerBackgroundColor
    ? { backgroundColor: data.disclamerBackgroundColor.hex }
    : {};
  const disclamerTextColorStyle = data.disclamerTextColor
    ? { color: data.disclamerTextColor.hex }
    : {};

  return (
    <Section.Container
      className={cn('bg-zinc-200', className)}
      id={data?.id}
      style={{
        ...disclamerBackgroundColorStyle,
        ...disclamerTextColorStyle,
      }}
      {...props}
    >
      <Section.Body className="flex flex-col items-center justify-center gap-4 px-0 pb-0 md:max-w-full md:gap-8">
        <div
          className="contact-disclamer w-full max-w-96 px-4 py-6 text-center font-semibold text-lg/relaxed text-primary-3systems md:max-w-[1200px] md:px-8 md:pb-8 md:text-3xl/relaxed"
          style={{
            ...disclamerBackgroundColorStyle,
            ...disclamerTextColorStyle,
          }}
        >
          <Markdown>{data.disclamer}</Markdown>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 bg-zinc-100 px-4 pt-4 md:flex-row lg:gap-12 lg:pt-0">
          {/* Left Image */}
          <div>
            <Image
              alt={data.leftImage.altText}
              className="h-auto w-full"
              // height={data.leftImage.metadata.dimensions.height}
              height={300}
              quality={100}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              src={data.leftImage.url}
              // width={data.leftImage.metadata.dimensions.width}
              width={300}
            />
          </div>

          {/* Contact Information */}
          <div className="lg:-mt-12 space-y-3" data-aos="fade-right">
            <p className="mt-0 text-center font-semibold text-2xl/relaxed text-primary-3systems lg:mt-15 lg:text-left">
              {data.contactName}
            </p>
            <div className="flex justify-center gap-2 text-primary-3systems md:items-center md:justify-start">
              <Image
                alt={data.contactEmailImage.altText}
                height={data.contactEmailImage.metadata.dimensions.height}
                quality={100}
                src={data.contactEmailImage.url}
                width={data.contactEmailImage.metadata.dimensions.width}
              />

              <a
                className="text-center font-semibold text-xl/relaxed hover:text-secondary-3systems hover:underline"
                href={data.contactEmailHref || '#'}
                rel="noopener noreferrer"
                target="_blank"
              >
                {data.contactEmail}
              </a>
            </div>
            <div className="flex justify-center gap-2 text-primary-3systems md:items-center md:justify-start">
              <Image
                alt={data.contactPhoneImage.altText}
                height={data.contactPhoneImage.metadata.dimensions.height}
                quality={100}
                src={data.contactPhoneImage.url}
                width={data.contactPhoneImage.metadata.dimensions.width}
              />

              <a
                className="text-center font-semibold text-base/relaxed text-primary-3systems hover:text-secondary-3systems hover:underline"
                href={data.contactPhoneHref || '#'}
                rel="noopener noreferrer"
                target="_blank"
              >
                {data.contactPhone}
              </a>
            </div>
          </div>

          <div>
            <Image
              alt={data.rightImage.altText}
              className="h-80 w-full"
              data-aos="fade-left"
              height={data.rightImage.metadata.dimensions.height}
              quality={100}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              src={data.rightImage.url}
              width={data.rightImage.metadata.dimensions.width}
            />
          </div>
        </div>
      </Section.Body>
    </Section.Container>
  );
}
