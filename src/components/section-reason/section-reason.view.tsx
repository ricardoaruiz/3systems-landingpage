import { CardContent } from '../card-content';
import { Section } from '../section';

export function SectionReasonView() {
  return (
    <Section.Container className="scroll-mt-15 lg:pb-4 " id="reasons">
      <Section.Header className="flex items-center justify-center bg-primary-cristallo">
        <Section.Title>
          Motivos para contratar uma assesssoria administrativa/financeira
        </Section.Title>
      </Section.Header>

      <Section.Body>
        <div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <CardContent
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              description="Uma assessoria ajuda a estruturar processos internos, melhorar a organização documental e otimizar fluxos de trabalho, evitando retrabalho e desperdício de tempo."
              // biome-ignore lint/suspicious/noArrayIndexKey: removing it soon
              key={index}
              title="Organização e Eficiência"
            />
          ))}
        </div>
      </Section.Body>
    </Section.Container>
  );
}
