import { GoToTopButtonView } from '@/components/go-to-top-button/go-to-top-button.view';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { SectionCallToAction } from '@/components/section-call-to-action';
import { SectionContact } from '@/components/section-contact';
import { SectionContent } from '@/components/section-content';
import { SectionReason } from '@/components/section-reason';
import { getHero } from '@/services';
import { getSections } from '@/services/section';

export default async function Home() {
  const heroData = await getHero();
  const sectionsData = await getSections();

  return (
    <main>
      <Header />
      <Hero {...heroData} />
      <SectionCallToAction />
      <SectionReason />
      {sectionsData.map((section) => {
        return (
          <SectionContent data={section} id={section.id} key={section.slug} />
        );
      })}
      <SectionContact />
      <GoToTopButtonView />
    </main>
  );
}
