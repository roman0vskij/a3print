import { useTranslations } from "next-intl";
import { OffersAccordion } from "../ui/offers-accordion";
import { OffersTabs } from "../ui/offers-tabs";

export function WhatWeOffer() {
  const t = useTranslations("HomePage.WhatWeOffer");

  return (
    <div
      id="what-we-offer"
      className="mx-auto mt-12 lg:mt-30.75 pt-10 w-full max-w-[1440px] flex flex-col items-center"
    >
      <h2 className="font-nunito-sans max-w-110 md:max-w-200 lg:max-w-300 h-full mx-auto px-8.25 text-center text-[32px] md:text-5xl lg:text-6xl font-medium leading-[122%] lg:leading-[129%]">
        {t("h2.1")}
        <br className="md:hidden" /> {t("h2.2")}
        <br />
        {t("h2.3")}
      </h2>
      <p className="max-w-80 md:max-w-170 lg:max-w-230 h-full mt-7 md:mt-6 lg:mt-5 mx-auto text-center text-xs md:text-sm lg:text-lg font-medium leading-[140%] font-montserrat">
        {t("p.1")}
        <br className="md:hidden" />
        {t("p.2")}
        <br className="hidden md:block" /> {t("p.3")}
        <br className="md:hidden" />
        {t("p.4")}
        <br className="md:hidden" />
        {t("p.5")}
        <br />
        {t("p.6")}
        <br className="md:hidden" />
        {t("p.7")}
        <br className="md:hidden" />
        {t("p.8")}
        <br className="md:hidden" />
        {t("p.9")}
      </p>

      <div className="mt-12 md:mt-14 lg:mt-17 mb-14.75 md:mb-13 lg:mb-12.5 px-3.75 w-full">
        <OffersTabs />
        <OffersAccordion />
      </div>
    </div>
  );
}
