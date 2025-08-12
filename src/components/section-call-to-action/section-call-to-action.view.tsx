import Image from 'next/image';
import cinthyaDedinho from '../../../public/images/cinthya_dedinho.webp';
import { Section } from '../section';

export function SectionCallToActionView() {
  return (
    <Section.Container backgroundImage="/images/fundo_verde.webp">
      <Section.Body className="flex flex-col items-center justify-center gap-4 p-4 pb-0 md:gap-8 md:p-8 md:pb-0">
        <p className="w-full max-w-96 text-center font-bold text-xl/relaxed text-zinc-50 md:max-w-[690px] md:text-4xl">
          Descubra como podemos transformar sua empresa!
        </p>

        <div className="relative h-[296px] w-[198px] md:h-[537px] md:w-[358px]">
          <Image
            alt="Transformação da Empresa"
            fill
            quality={100}
            src={cinthyaDedinho}
          />
        </div>
      </Section.Body>
    </Section.Container>
  );
}
