import type { SectionProps } from './components/section.types';

export function SectionView({
  children,
  backgroundImage,
  style,
  ...props
}: SectionProps) {
  const internalStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        ...style,
      }
    : { ...style };

  return (
    <section style={internalStyle} {...props}>
      {children}
    </section>
  );
}
