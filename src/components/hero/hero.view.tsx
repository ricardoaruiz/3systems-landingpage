import Image from 'next/image';
import logo from '../../../public/images/logo.svg';

export function HeroView() {
  return (
    <div className="flex flex-col items-center gap-4 bg-[url('/images/fundo_banner.webp')] bg-center bg-cover bg-no-repeat p-4 md:p-8 lg:h-[calc(100dvh)] lg:justify-center lg:gap-20">
      <div className="relative size-[140px] md:size-[400px]">
        <Image alt="Logo" fill src={logo} />
      </div>
      <h1 className="text-center font-bold text-2xl/snug text-primary-cristallo md:max-w-[1000px] md:text-6xl/snug">
        Soluções e serviços empresarias para pequenas e médias empresas
      </h1>

      <div className="h-[2px] w-full max-w-48 bg-tertiary-cristallo md:max-w-96" />

      <p className="text-center font-bold text-secondary-cristallo text-xl/snug md:max-w-[1000px] md:text-5xl/snug">
        Estratégias personalizadas para impulsionar o crescimento do seu negócio
      </p>
    </div>
  );
}
