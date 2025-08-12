import { CardContent } from '../card-content';
import { Section } from '../section';

export function SectionReasonView() {
  return (
    <Section.Container>
      <Section.Header className="flex items-center justify-center bg-primary-cristallo">
        <h2 className="text-center font-bold text-xl/relaxed text-zinc-50 md:max-w-[650px] md:text-4xl/snug">
          Motivos para contratar uma assesssoria administrativa/financeira
        </h2>
      </Section.Header>

      <Section.Body>
        <div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-6">
          <CardContent
            description="Uma assessoria ajuda a estruturar processos internos, melhorar a organização documental e otimizar fluxos de trabalho, evitando retrabalho e desperdício de tempo."
            title="Organização e Eficiência"
          />
          <CardContent
            description="Uma assessoria ajuda a estruturar processos internos, melhorar a organização documental e otimizar fluxos de trabalho, evitando retrabalho e desperdício de tempo."
            title="Organização e Eficiência"
          />
          <CardContent
            description="Uma assessoria ajuda a estruturar processos internos, melhorar a organização documental e otimizar fluxos de trabalho, evitando retrabalho e desperdício de tempo."
            title="Organização e Eficiência"
          />
          <CardContent
            description="Uma assessoria ajuda a estruturar processos internos, melhorar a organização documental e otimizar fluxos de trabalho, evitando retrabalho e desperdício de tempo."
            title="Organização e Eficiência"
          />
        </div>
      </Section.Body>
    </Section.Container>
  );
}
