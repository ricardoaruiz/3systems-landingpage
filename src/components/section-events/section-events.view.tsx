import palestra from '../../../public/images/palestra.webp';
import { CardContent } from '../card-content';
import { Section } from '../section';
import { SideContent } from '../side-content';

export function SectionEventsView() {
  return (
    <Section.Container className="lg:pb-4">
      <Section.Header className="flex flex-col items-center justify-center gap-4 bg-tertiary-cristallo">
        <Section.Title className="text-zinc-900">Eventos</Section.Title>
        <Section.Separator className="bg-zinc-900" />
        <Section.Description className="text-zinc-900">
          Colaboramos com você para definir objetivos claros, planejar e
          executar o evento de forma eficiente.
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
          alt="Sala com vária pessoas assistindo uma palestra"
          data-aos="fade-left"
          image={palestra}
        >
          <SideContent.Content className="bg-tertiary-cristallo text-zinc-900">
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
