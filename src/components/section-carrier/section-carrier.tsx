import { CheckIcon } from "lucide-react";
import {
  Timeline,
  TimelineContent,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import { cn } from "@/lib/utils";
import { Section } from "../section";

const items = [
  {
    id: 1,
    // date: "15 minutes ago",
    title: "Engenheiro Senior",
    // action: "opened a new issue",
    description:
      "Formulação de Planos de Gerenciamento de Resíduos Sólidos Urbanos, Industriais, Hospitalares e de Serviços de Limpeza Pública. Elaboração de Laudos Técnicos para o licenciamento junto aos órgãos ambientais para amostragem de planos de resíduos e efluentes industriais. Elaboração de Planejamento Ambiental. Gerenciamento em resíduos sólidos e sua destinação final. Resíduos industriais: amostragem, classificação, reciclagem, armazenamento e tratamento. Elaboração de planos de gerenciamento e planejamento territorial. Coordenação nos Guias de Produção mais Limpa publicados pela CETESB e FIESP. ",
    image: "/avatar-40-01.jpg",
  },
  {
    id: 2,
    // date: "10 minutes ago",
    title: "Assessor Técnico e Assistente Executivo da Diretoria de Engenharia",
    // action: "commented on",
    description:
      "Coordenação Técnica do Rio Tietê. Acompanhamento técnico junto ao Ministério Público, à Procuradoria-Geral do Estado e ao Departamento Jurídico. Gestão dos Sedimentos; análise de Projetos de Lei do Legislativo Estadual. Elaboração de pareceres técnicos específicos quanto à Flotação do Rio Pinheiros, Aeroportos e outros assuntos, inclusive aqueles pertinentes ao Ministério Público do Estado de São Paulo, com foco na legislação pertinente. Estudos de Impacto Ambiental. ",
    image: "/avatar-40-02.jpg",
  },
  {
    id: 3,
    // date: "5 minutes ago",
    title: "Gerente do Departamento de Desenvolvimento, Tecnologia e Riscos",
    // action: "assigned you to",
    description: `Oferecer subsídios técnicos às atividades de controle, fiscalização e licenciamento. Realizou estudos relacionados aos instrumentos, resoluções técnico-legais, procedimentos, políticas públicas e projetos que levem à adoção da prevenção à poluição, que abrange a produção mais limpa e a análise de riscos, o suporte técnico quanto aos aspectos de acidentes químicos e a prestação de serviços quanto à calibração e verificação de instrumentos, bem como na coordenação e execução de ensaios de proficiência para comparação interlaboratorial. Outra função do Departamento era participar das ações de transferência de tecnologia, por meio do desenvolvimento de cursos técnicos para o público interno e externo, de palestras e treinamentos práticos especializados e estágios. 
A partir do ano de 2008, foi criada a 3 SYSTEMS CONSULTORIA, que atua principalmente no Gerenciamento de Áreas Contaminadas. Também possui bom relacionamento com o órgão ambiental do Estado de São Paulo e atua em licenciamento ambiental de vários empreendimentos.`,
    image: "/avatar-40-03.jpg",
  },
];

export function SectionCarrier() {
  return (
    <Section.Container className="lg:scroll-mt-15 lg:pb-4" id="carreira">
      <Section.Header
        className={cn("flex flex-col items-center justify-center gap-4")}
      >
        <Section.Title noBorder>Carreira</Section.Title>
      </Section.Header>

      <Section.Body>
        <h2 className="mb-6 w-full font-bold text-lg/relaxed lg:text-2xl/relaxed">
          CETESB - Cia. de Tecnologia de Saneamento Ambiental
        </h2>

        <Timeline>
          {items.map((item) => (
            <TimelineItem
              className="group-data-[orientation=vertical]/timeline:ms-10 group-data-[orientation=vertical]/timeline:not-last:pb-8"
              data-aos="fade-down"
              key={item.id}
              step={item.id}
            >
              <TimelineHeader>
                <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
                <TimelineTitle className="mt-0.5 font-semibold text-lg lg:text-xl">
                  {item.title}
                  {/* <span className="font-normal text-muted-foreground text-sm">
                    {item.action}
                  </span> */}
                </TimelineTitle>
                <TimelineIndicator className="group-data-[orientation=vertical]/timeline:-left-7 flex size-6 items-center justify-center border-none bg-primary-2-3systems group-data-completed/timeline-item:bg-primary-2-3systems group-data-completed/timeline-item:text-primary-foreground">
                  <CheckIcon className="text-white" size={16} />
                </TimelineIndicator>
              </TimelineHeader>
              <TimelineContent className="mt-2 rounded-lg border px-4 py-3 text-base/relaxed text-foreground lg:text-lg">
                {item.description}
                {/* <TimelineDate className="mt-1 mb-0">{item.date}</TimelineDate> */}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Section.Body>
    </Section.Container>
  );
}
