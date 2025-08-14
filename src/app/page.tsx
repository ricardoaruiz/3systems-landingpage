import Image from 'next/image';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { SectionAdmin } from '@/components/section-admin';
import { SectionCallToAction } from '@/components/section-call-to-action';
import { SectionContact } from '@/components/section-contact';
import { SectionEvents } from '@/components/section-events';
import { SectionFinancial } from '@/components/section-financial';
import { SectionReason } from '@/components/section-reason';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <SectionReason />
      <SectionCallToAction />
      <SectionFinancial />
      <SectionAdmin />
      <SectionEvents />
      <SectionContact />

      <footer className="bg-zinc-300">
        <div className="mx-auto max-w-[1440px]">
          <Image
            alt="Footer imagage"
            className="h-auto w-full"
            height={712}
            quality={100}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            src="/images/footer.webp"
            width={1440}
          />
        </div>
      </footer>
    </main>
  );
}
