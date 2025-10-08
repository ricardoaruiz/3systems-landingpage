import { cn } from "@/lib/utils";
import { Section } from "../section";

export function SectionHistory() {
  return (
    <Section.Container className="lg:scroll-mt-15 lg:pb-4" id="historia">
      <Section.Header
        className={cn("flex flex-col items-center justify-center gap-4")}
        style={{ backgroundColor: "#7B4B2A" }}
      >
        <Section.Title noBorder>História</Section.Title>
      </Section.Header>

      <Section.Body
        className="space-y-10 text-lg/relaxed lg:text-2xl/relaxed"
        data-aos="fade-left"
      >
        <p>
          Fundadora da 3 Systems, formada em Engenheira Química pela Faculdade
          Oswaldo Cruz, Angela Machado atua há 45 anos como profissional em meio
          ambiente.
        </p>
        <p>
          Após trabalhar na CETESB desde o ano de 1.980 nas áreas de resíduos
          sólidos, efluentes líquidos e emergências químicas, iniciou suas
          atividades na consultoria, se especializando em Áreas Contaminadas por
          meio da pós-graduação pelo Senac.
        </p>
        <p>
          Possui clientes das áreas industriais e de construção, além de atuar
          como perita ambiental em processos do Ministério Público.
        </p>

        <h2 className="my-0 font-bold text-xl/relaxed lg:text-2xl/relaxed">
          Formação Acadêmica
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Engenharia Química. Faculdade de Química Oswaldo Cruz.</li>
          <li>Técnico em Química: Instituto Mackenzie</li>
        </ul>
      </Section.Body>
    </Section.Container>
  );
}
