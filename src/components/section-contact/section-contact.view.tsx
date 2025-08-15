import { MailIcon, PhoneIcon } from 'lucide-react';
import Image from 'next/image';
import cinthyaLado from '../../../public/images/cinthya_lado.webp';
import { Section } from '../section';

export function SectionContactView() {
  return (
    <Section.Container className="bg-zinc-200" id="contact">
      <Section.Body className="flex flex-col items-center justify-center gap-4 px-0 pb-0 md:max-w-full md:gap-8">
        <p className="w-full max-w-96 px-4 py-6 text-center font-semibold text-lg/relaxed text-primary-cristallo md:max-w-[1200px] md:px-8 md:pb-8 md:text-3xl/relaxed">
          Nossos serviços são personalizados para atender às demandas
          específicas do seu negócio. Para mais informações, entre em contato e
          solicite um diagnóstico gratuito para obter uma proposta detalhada.
        </p>

        <div className="flex w-full flex-col items-center justify-center gap-4 bg-zinc-100 px-4 pt-4 md:flex-row lg:pt-0">
          <div className="relative h-[200px] w-[400px]">
            <Image
              alt="Footer imagage"
              className="h-auto w-full"
              fill
              quality={100}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              src="/images/logo.svg"
            />
          </div>
          <div className="lg:-mt-12 space-y-3" data-aos="fade-right">
            <p className="text-center font-semibold text-2xl/relaxed text-primary-cristallo ">
              Cinthya Hayane de Carvalho
            </p>
            <div className="flex justify-center gap-2 text-primary-cristallo md:items-center md:justify-start">
              <MailIcon className="hidden size-5 md:block" />
              <p className="text-center font-semibold text-xl/relaxed ">
                cinthya.hayane@gmail.com
              </p>
            </div>
            <div className="flex justify-center gap-2 text-primary-cristallo md:items-center md:justify-start">
              <PhoneIcon className="hidden size-5 md:block" />
              <p className="text-center font-semibold text-base/relaxed text-primary-cristallo ">
                (19) 9 9223-7912
              </p>
            </div>
          </div>

          <div className="relative h-[330px] w-[216px]" data-aos="fade-left">
            <Image
              alt="Transformação da Empresa"
              fill
              quality={100}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              src={cinthyaLado}
            />
          </div>
        </div>
      </Section.Body>
    </Section.Container>
  );
}
