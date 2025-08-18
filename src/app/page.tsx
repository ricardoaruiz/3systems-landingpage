import { GoToTopButtonView } from '@/components/go-to-top-button/go-to-top-button.view';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { SectionCallToAction } from '@/components/section-call-to-action';
import { SectionContact } from '@/components/section-contact';
import { SectionContent } from '@/components/section-content';
import { getHero } from '@/services';
import { getCallToAction } from '@/services/call-to-actiion';
import { getMenu } from '@/services/menu/fetcher';
import { getSections } from '@/services/section';

export default async function Home() {
  const menuData = await getMenu();
  const heroData = await getHero();
  const callToActionData = await getCallToAction();
  const sectionsData = await getSections();

  return (
    <main>
      <Header menu={menuData} />

      <Hero {...heroData} />

      <SectionCallToAction {...callToActionData} />

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
