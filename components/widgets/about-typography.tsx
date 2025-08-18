import Image from "next/image";
import { useTranslations } from "next-intl";

export function AboutTypography() {
  const t = useTranslations("HomePage.AboutTypography");

  return (
    <div
      id="about-typography"
      className="flex flex-col items-center w-full pt-10 lg:pt-20 px-3.75 pb-9.5 lg:pb-17.75"
    >
      <h2
        className="lg:hidden text-center text-4xl md:text-5xl lg:text-6xl font-medium leading-[129%]"
        key={t("title.1")}
      >
        {t("title.1")}
      </h2>

      <h2
        className="max-lg:hidden max-w-260 text-center text-4xl md:text-5xl lg:text-6xl font-medium leading-[129%]"
        key={t("title.2.1")}
      >
        <span className="text-(--font-blue-color) text-center text-4xl md:text-5xl lg:text-6xl font-medium leading-[129%]">
          {t("title.2.1")}
        </span>
        {t("title.2.2")}
      </h2>

      <p className="lg:hidden w-full max-w-[345px] mt-4 text-center text-xl leading-[129%]">
        {t("p1.1.1")}
        <br />
        <span className="text-(--font-blue-color) text-center text-xl leading-[129%]">
          {t("p1.1.2")}
        </span>
      </p>

      <p className="max-lg:hidden w-full max-w-190 mt-5 text-center text-[28px] leading-[129%]">
        {t("p1.2")}
      </p>

      <div className="flex flex-col items-center lg:flex-row lg:items-start mt-15 lg:mt-24 mx-auto gap-6 lg:justify-between w-full max-w-[1260px]">
        <div className="flex flex-col items-center lg:flex-col-reverse lg:items-end">
          <div className="relative w-12 md:w-25 h-9 md:h-18.75 flex items-end justify-center">
            <div className="bg-(--primary-color) rounded-[4px] w-12 md:w-25 h-4.75 md:h-10" />
            <Image
              src="/calendar-clock.svg"
              alt="calendar-clock"
              width={80}
              height={75}
              className="w-9.6 md:w-20 h-9 md:h-18.75 absolute m-auto"
            />
          </div>

          <div className="bg-(--primary-color) h-0.5 w-50 lg:w-[354px] rounded-xs mt-4 lg:mt-7 mb-3 lg:mb-0.75" />

          <p className="max-w-[343px] md:max-w-[400px] lg:max-w-[420px] max-lg:text-center lg:text-end text-xs md:text-sm lg:text-base font-medium leading-[140%] font-montserrat">
            {t("p2.1")}
            <br />
            {t("p2.2")}
            <span className="max-lg:text-center text-xs md:text-sm lg:text-base leading-[140%] font-semibold text-(--font-blue-color) font-montserrat">
              {t("p2.3")}
            </span>
          </p>
        </div>

        <div className="rounded-md w-[345px] lg:w-[300px] h-[236px] lg:h-110 bg-[url(/side-view-woman-with-color-palette.jpg)] bg-bottom bg-cover" />

        <div className="flex flex-col items-center lg:items-start lg:self-end">
          <div className="relative w-12 md:w-25 h-9 md:h-18 flex items-end justify-center">
            <div className="bg-(--primary-color) rounded-[4px] w-12 md:w-25 h-4.75 md:h-10" />
            <Image
              src="/shield-check.svg"
              alt="shield-check"
              width={80}
              height={72}
              className="w-9.6 md:w-20 h-9 md:h-18 absolute m-auto"
            />
          </div>

          <div className="bg-(--primary-color) h-0.5 w-50 lg:w-[354px] rounded-xs mt-4 lg:mt-4 mb-3 lg:mb-7" />

          <p className="max-w-[345px] md:max-w-[400px] lg:max-w-[420px] max-lg:text-center text-xs md:text-sm lg:text-base font-medium leading-[140%] font-montserrat">
            {t("p3.1")}
            <span className="max-lg:text-center text-xs md:text-sm lg:text-base leading-[140%] font-semibold text-(--font-blue-color) font-montserrat">
              {t("p3.2")}
            </span>
            {t("p3.3")}
            <br className="lg:hidden" />
            {t("p3.4")}
            <br className="lg:hidden" />
            {t("p3.5")}
            <br className="lg:hidden" />
            {t("p3.6")}
            <br className="lg:hidden" />
            {t("p3.7")}
            <br className="lg:hidden" />
            {t("p3.8")}
            <span className="max-lg:text-center text-xs md:text-sm lg:text-base leading-[140%] font-semibold text-(--font-blue-color) font-montserrat">
              {t("p3.9")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
