import Image from 'next/image';
import contadora from '../../../public/images/contadora.webp';
import { CardContent } from '../card-content';
import { Section } from '../section';

export function SectionFinancialView() {
  return (
    <Section.Container>
      <Section.Header className="flex flex-col items-center justify-center gap-4 bg-primary-cristallo">
        <h2 className="text-center font-bold text-xl/snug text-zinc-50 md:max-w-[684px] md:text-5xl/snug">
          Terceirização Financeira
        </h2>
        <div className="h-[2px] w-full max-w-48 bg-tertiary-cristallo md:max-w-96" />

        <p className="text-center font-bold text-base/snug text-zinc-50 md:max-w-[684px] md:text-4xl/snug">
          Cuidamos das rotinas do financeiro para que você tenha mais tempo para
          focar naquilo que importa: o crescimento do seu negócio.
        </p>
      </Section.Header>

      <Section.Body className="flex flex-col gap-3 md:flex-row md:gap-6">
        <div className="flex w-full flex-col gap-3 md:max-w-[500px]">
          <CardContent
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            hideBorderDesktop
            title="Title"
          />
          <CardContent
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            hideBorderDesktop
            title="Title"
          />
          <CardContent
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            hideBorderDesktop
            title="Title"
          />
          <CardContent
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            hideBorderDesktop
            title="Title"
          />
        </div>
        <div className="hidden flex-1 md:flex md:flex-col">
          <div className="relative h-[300px]">
            <Image
              alt="Mulher com dinheiro na mão operando uma calculadora"
              className="object-cover"
              fill
              src={contadora}
            />
          </div>
          <div className="flex-1 space-y-4 bg-primary-cristallo p-4 text-center font-bold text-xl/relaxed text-zinc-50 shadow-md">
            <p>
              Ter uma assessoria financeira adequada desempenha um papel
              fundamental na saúde financeira tanto de empresas quanto de
              pessoas.
            </p>
            <p>
              Otimizamos a gestão financeira para maximizar a rentabilidade e
              sustentabilidade do seu negócio.
            </p>
          </div>
        </div>
      </Section.Body>
    </Section.Container>
  );
}
