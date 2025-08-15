import contadora from '../../../public/images/contadora.webp';
import { CardContent } from '../card-content';
import { Section } from '../section';
import { SideContent } from '../side-content';

export function SectionFinancialView() {
  return (
    <Section.Container className="lg:pb-4">
      <Section.Header className="flex flex-col items-center justify-center gap-4 bg-primary-cristallo">
        <Section.Title>Terceirização Financeira</Section.Title>
        <Section.Separator />
        <Section.Description>
          Cuidamos das rotinas do financeiro para que você tenha mais tempo para
          focar naquilo que importa: o crescimento do seu negócio.
        </Section.Description>
      </Section.Header>

      <Section.Body className="flex flex-col gap-3 md:flex-row md:gap-6">
        <div className="flex w-full flex-2/3 flex-col gap-3 ">
          {Array.from({ length: 4 }).map((_, index) => (
            <CardContent
              data-aos="fade-right"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              hideBorderDesktop
              // biome-ignore lint/suspicious/noArrayIndexKey: removing it soon
              key={index}
              title="Title"
            />
          ))}
        </div>
        <SideContent.Container
          alt="Mulher com dinheiro na mão operando uma calculadora"
          data-aos="fade-left"
          image={contadora}
        >
          <SideContent.Content>
            <p>
              Ter uma assessoria financeira adequada desempenha um papel
              fundamental na saúde financeira tanto de empresas quanto de
              pessoas.
            </p>
            <p>
              Otimizamos a gestão financeira para maximizar a rentabilidade e
              sustentabilidade do seu negócio.
            </p>
          </SideContent.Content>
        </SideContent.Container>
      </Section.Body>
    </Section.Container>
  );
}
