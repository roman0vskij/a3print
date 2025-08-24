import { useTranslations } from "next-intl";
import EmblaCarousel from "../ui/portfolio-carousel/carousel";
import { Title } from "../ui/title";

export function Portfolio() {
  const t = useTranslations("HomePage.Portfolio");

  return (
    <div id="portfolio" className="pt-10 lg:pt-20 pb-15 lg:pb-16 w-full">
      <Title title={t("title")} />

      <p className="max-w-180 mx-auto text-center text-xs md:text-base lg:text-[22px] font-medium leading-[140%] lg:leading-[150%] font-montserrat mt-2 px-7.5">
        {t("p")}
      </p>
      <div className="mt-10 lg:mt-[51px] mx-auto w-full">
        <EmblaCarousel
          slides={[
            { src: "/carousel/2.jpg", alt: "Футболка FBSM" },
            { src: "/carousel/3.jpg", alt: "Салон красоты GIARDINO" },
            { src: "/carousel/4.jpg", alt: "Меню NINO" },
            { src: "/carousel/5.jpg", alt: "Gogra" },
            { src: "/carousel/6.jpg", alt: "Empire Dental Clinic" },
            { src: "/carousel/7.jpg", alt: "BEHYPE" },
            { src: "/carousel/8.jpg", alt: "Скетчбук" },
            { src: "/carousel/9.jpg", alt: "Бейдж" },
            { src: "/carousel/10.jpg", alt: "Бейдж 2" },
            { src: "/carousel/11.jpg", alt: "Вывеска" },
            { src: "/carousel/12.jpg", alt: "Буклет" },
            { src: "/carousel/13.jpg", alt: "Бумажник" },
            { src: "/carousel/14.jpg", alt: "Значок GEELY" },
            { src: "/carousel/15.jpg", alt: "Атек" },
            { src: "/carousel/1.jpg", alt: "Фотообои и фрески" },
          ]}
        />
      </div>
    </div>
  );
}
