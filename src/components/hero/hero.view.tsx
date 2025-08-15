import Image from 'next/image';
import { cn } from '@/lib/utils';
import logo from '../../../public/images/logo.svg';

export function HeroView() {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-4 p-4',
        'lg:h-screen lg:justify-center lg:gap-8 lg:px-2',
        "bg-[url('/images/fundo_banner.webp')] bg-center bg-cover bg-no-repeat"
      )}
    >
      <div className="relative size-[140px] md:size-[320px]">
        <Image
          alt="Logo"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          src={logo}
        />
      </div>
      <h1 className="text-center font-bold text-2xl/snug text-primary-cristallo md:max-w-[1200px] md:text-6xl/snug">
        Soluções e serviços empresarias para pequenas e médias empresas
      </h1>

      <div className="h-[2px] w-full max-w-48 bg-tertiary-cristallo md:max-w-96" />

      <p className="text-center font-bold text-secondary-cristallo text-xl/snug md:max-w-[1200px] md:text-5xl/snug">
        Estratégias personalizadas para impulsionar o crescimento do seu negócio
      </p>
    </div>
  );
}
