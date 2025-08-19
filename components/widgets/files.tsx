import { useTranslations } from "next-intl";
import Image from "next/image";

function Button() {
  const t = useTranslations("HomePage.Files");

  return (
    <button className="hover:drop-shadow-md max-lg:hover:drop-shadow-sm bg-(--primary-color) rounded-[4px] py-4 px-7 w-50 h-12 lg:h-13 font-montserrat font-semibold text-base leading-[125%] text-(--font-hover-color) flex justify-center items-center tracking-[-0.01em]">
      {t("button")}
    </button>
  );
}

export function Files() {
  const t = useTranslations("HomePage.Files");

  return (
    <div className="mx-auto flex flex-col md:flex-row items-center justify-center pt-11.25 pb-12 md:py-13 lg:py-17.5 md:gap-10 lg:gap-28.25 lg:px-5">
      <div className="flex flex-col items-center">
        <Image
          src="/file.svg"
          alt="file img"
          width={150}
          height={150}
          className="size-20 lg:size-37.5"
        />
        <h4 className="font-medium text-2xl md:text-3xl lg:text-[40px] leading-[120%] lg:leading-[129%] text-center max-w-55 md:max-w-70 lg:max-w-90 mt-5 md:mt-6 lg:mt-7.5 mb-3 md:mb-4 lg:mb-5">
          {t("h1")}
        </h4>
        <p className="lg:hidden font-montserrat font-medium text-xs md:text-sm lg:text-base leading-[140%] text-center max-w-60 md:max-w-70 lg:max-w-110 mb-5 md:mb-7 lg:mb-9">
          {t("p1.1")}
        </p>
        <p className="max-lg:hidden font-montserrat font-medium text-xs md:text-sm lg:text-base leading-[140%] text-center max-w-60 md:max-w-70 lg:max-w-110 mb-5 md:mb-7 lg:mb-9">
          {t("p1.2")}
        </p>
        <a href="/for-print.pdf" target="_blank" download>
          <Button />
        </a>
      </div>

      <div className="bg-(--primary-color) h-0.5 md:h-98 lg:h-127.5 w-60 md:w-0.5 rounded-xs mt-8.75 mb-6.25" />

      <div className="flex flex-col items-center">
        <Image
          src="/pig.svg"
          alt="pig img"
          width={150}
          height={150}
          className="size-20 lg:size-37.5"
        />
        <h4 className="lg:hidden font-medium text-2xl md:text-3xl lg:text-[40px] leading-[120%] lg:leading-[129%] text-center max-w-55 md:max-w-70 lg:max-w-90 mt-5 md:mt-6 lg:mt-7.5 mb-3 md:mb-4 lg:mb-5">
          {t("h2.1")}
        </h4>
        <h4 className="max-lg:hidden font-medium text-2xl md:text-3xl lg:text-[40px] leading-[120%] lg:leading-[129%] text-center max-w-55 md:max-w-70 lg:max-w-90 mt-5 md:mt-6 lg:mt-7.5 mb-3 md:mb-4 lg:mb-5">
          {t("h2.2")}
        </h4>
        <p className="lg:hidden font-montserrat font-medium text-xs md:text-sm lg:text-base leading-[140%] text-center max-w-68 md:max-w-80 lg:max-w-110 mb-5 md:mb-7 lg:mb-9">
          {t("p2.1")}
        </p>
        <p className="max-lg:hidden font-montserrat font-medium text-xs md:text-sm lg:text-base leading-[140%] text-center max-w-68 md:max-w-70 lg:max-w-110 mb-5 md:mb-7 lg:mb-9">
          {t("p2.2")}
        </p>
        <a href="/price.pdf" target="_blank" download>
          <Button />
        </a>
      </div>
    </div>
  );
}
