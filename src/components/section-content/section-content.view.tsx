import Markdown from 'react-markdown';
import { cn } from '@/lib/utils';
import { Section } from '../section';
import { SideContent } from '../side-content';
import { Cards } from './components/cards';
import type { SectionContentProps } from './section-content.types';

export function SectionContentView({
  data,
  className,
  ...props
}: SectionContentProps) {
  const hasSideContent = !!data.sideContent;
  const hasDescription = !!data.description;

  const backgroundStyle = data.color ? { backgroundColor: data.color.hex } : {};
  const textColorStyle = data.textColor ? { color: data.textColor.hex } : {};
  const separatorColorStyle = data.textColor
    ? { backgroundColor: data.textColor.hex }
    : {};

  return (
    <Section.Container
      className={cn('scroll-mt-15 lg:pb-4 ', className)}
      {...props}
    >
      <Section.Header
        className={cn('flex flex-col items-center justify-center gap-4')}
        style={{ ...backgroundStyle, ...textColorStyle }}
      >
        <Section.Title>{data.subject}</Section.Title>

        {hasDescription && (
          <>
            <Section.Separator style={{ ...separatorColorStyle }} />
            <Section.Description>{data.description}</Section.Description>
          </>
        )}
      </Section.Header>

      <Section.Body className="flex flex-col gap-3 md:flex-row md:gap-6">
        <Cards data={data.cards} hasSideContent={hasSideContent} />

        <SideContent.Container
          alt={data.sideContent?.image.altText}
          data-aos="fade-left"
          image={data.sideContent?.image.url}
          isVisible={hasSideContent}
        >
          <SideContent.Content
            style={{ ...backgroundStyle, ...textColorStyle }}
          >
            <Markdown>{data.sideContent?.description}</Markdown>
          </SideContent.Content>
        </SideContent.Container>
      </Section.Body>
    </Section.Container>
  );
}
