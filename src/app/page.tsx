import { GoToTopButtonView } from "@/components/go-to-top-button/go-to-top-button.view";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { SectionCallToAction } from "@/components/section-call-to-action";
import { SectionCarrier } from "@/components/section-carrier";
import { SectionContact } from "@/components/section-contact";
import { SectionContent } from "@/components/section-content";
import { SectionHistory } from "@/components/section-history";
import { WhatsAppButtonView } from "@/components/whatsapp-button/whatsapp-button.view";
import { getHero } from "@/services";
import { getCallToAction } from "@/services/call-to-actiion";
import { getContact } from "@/services/contact/fetcher";
import { getHistory } from "@/services/history/fetcher";
import { getMenu } from "@/services/menu/fetcher";
import { getSections } from "@/services/section";

export default async function Home() {
  const menuData = await getMenu();
  const heroData = await getHero();
  const callToActionData = await getCallToAction();
  const sectionsData = await getSections();
  const contactData = await getContact();
  const historyData = await getHistory();

  return (
    <main>
      <Header menu={menuData} />
      <Hero data={heroData} />
      <SectionCallToAction data={callToActionData} />
      <SectionHistory data={historyData} />
      <SectionCarrier />
      {sectionsData.map((section) => (
        <SectionContent data={section} id={section.id} key={section.slug} />
      ))}
      <SectionContact data={contactData} />
      <WhatsAppButtonView href={contactData?.contactPhoneHref} />
      <GoToTopButtonView />
    </main>
  );
}
