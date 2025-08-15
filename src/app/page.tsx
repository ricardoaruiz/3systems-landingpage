import { GoToTopButtonView } from '@/components/go-to-top-button/go-to-top-button.view';
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
      <GoToTopButtonView />
    </main>
  );
}
