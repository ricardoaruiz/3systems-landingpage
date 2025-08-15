import administradora from '../../../public/images/administradora.webp';
import { CardContent } from '../card-content';
import { Section } from '../section';
import { SideContent } from '../side-content';

export function SectionAdminView() {
  return (
    <Section.Container className="lg:pb-4">
      <Section.Header className="flex flex-col items-center justify-center gap-4 bg-secondary-cristallo">
        <Section.Title>Assessoria Administrativa</Section.Title>
        <Section.Separator />
        <Section.Description>
          Suporte no dia a dia da sua empresa
        </Section.Description>
      </Section.Header>

      <Section.Body className="flex flex-col gap-3 md:flex-row md:gap-6">
        <div className="flex w-full flex-2/3 flex-col gap-3">
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
          alt="Mulher com operando um computador"
          data-aos="fade-left"
          image={administradora}
        >
          <SideContent.Content>
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
          </SideContent.Content>
        </SideContent.Container>
      </Section.Body>
    </Section.Container>
  );
}
