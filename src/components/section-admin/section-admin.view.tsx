import Image from 'next/image';
import administradora from '../../../public/images/administradora.webp';
import { CardContent } from '../card-content';
import { Section } from '../section';

export function SectionAdminView() {
  return (
    <Section.Container className="lg:pb-4">
      <Section.Header className="flex flex-col items-center justify-center gap-4 bg-secondary-cristallo">
        <h2 className="text-center font-bold text-xl/snug text-zinc-50 md:max-w-[684px] md:text-5xl/snug">
          Assessoria Administrativa
        </h2>
        <div className="h-[2px] w-full max-w-48 bg-zinc-50 md:max-w-96" />

        <p className="text-center font-bold text-base/snug text-zinc-50 md:max-w-[1200px] md:text-4xl/snug">
          Suporte no dia a dia da sua empresa
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
              src={administradora}
            />
          </div>
          <div className="flex-1 space-y-4 bg-secondary-cristallo p-4 text-center font-bold text-xl/relaxed text-zinc-50 shadow-md">
            <p>
              Um bom serviços de assessoria administrativa pode ser a garantia
              de um funcionamento mais organizado, fluido e acima de tudo
              otimizado em uma organização.
            </p>
            <p>
              Analisamos processos administrativos, oferecendo suporte
              especializado para resolver questões com agilidade. Organizamos
              demandas e tratamos pendências, garantindo a eficiência e
              continuidade do seu negócio.
            </p>
          </div>
        </div>
      </Section.Body>
    </Section.Container>
  );
}
