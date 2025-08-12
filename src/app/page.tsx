import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { SectionCallToAction } from '@/components/section-call-to-action';
import { SectionReason } from '@/components/section-reason';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <SectionReason />
      <SectionCallToAction />
    </main>
  );
}
