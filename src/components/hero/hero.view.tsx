export function HeroView() {
  return (
    <div className="flex flex-col items-center gap-4 bg-[url('/images/fundo_banner.webp')] bg-center bg-cover bg-no-repeat p-4 md:p-8">
      <h1 className="text-center font-bold text-2xl/snug text-primary-cristallo md:max-w-[684px] md:text-5xl/snug">
        Soluções e serviços empresarias para pequenas e médias empresas
      </h1>

      <div className="h-[2px] w-full max-w-48 bg-tertiary-cristallo md:max-w-96" />

      <p className="text-center font-bold text-secondary-cristallo text-xl/snug md:max-w-[684px] md:text-4xl/snug">
        Estratégias personalizadas para impulsionar o crescimento do seu negócio
      </p>
    </div>
  );
}
