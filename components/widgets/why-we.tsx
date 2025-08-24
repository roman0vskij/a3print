import { useTranslations } from "next-intl";
import { Title } from "../ui/title";
import Image from "next/image";

export function WhyWe() {
  const t = useTranslations("HomePage.WhyWe");

  return (
    <div className="pt-10 lg:py-17.5 pb-23.75 px-3.75 flex flex-col items-center mx-auto">
      <Title title={t("title")} />
      <p className="sub2-font-nunito-sans w-full max-w-[325px] md:max-w-125 lg:max-w-170 mt-3 md:mt-4 lg:mt-5 text-center text-[15px] md:text-xl lg:text-[28px] leading-[140%] lg:leading-[129%]">
        <span className="sub2-font-nunito-sans text-(--font-blue-color)">
          {t("p1.1")}
        </span>
        {t("p1.2")}
      </p>
      <div className="mt-12 md:mt-18 lg:mt-25 flex flex-col items-center max-w-[1140px]">
        <div className="flex flex-col md:flex-row-reverse items-center gap-3 md:gap-5 lg:gap-7.5">
          <div className="shrink-0 bg-(--primary-color)/10 flex justify-between gap-1.5 lg:gap-2.5 p-3 lg:px-7 lg:py-6 w-62 lg:w-136.5 h-16 lg:h-34.5 rounded-[4px] lg:rounded-md">
            <Image
              src="/lightning.svg"
              alt="lightning"
              width={90}
              height={90}
              className="size-10 lg:size-22.5"
            />
            <Image
              src="/lightning.svg"
              alt="lightning"
              width={90}
              height={90}
              className="size-10 lg:size-22.5 opacity-75"
            />
            <Image
              src="/lightning.svg"
              alt="lightning"
              width={90}
              height={90}
              className="size-10 lg:size-22.5 opacity-55"
            />
            <Image
              src="/lightning.svg"
              alt="lightning"
              width={90}
              height={90}
              className="size-10 lg:size-22.5 opacity-35"
            />
            <Image
              src="/lightning.svg"
              alt="lightning"
              width={90}
              height={90}
              className="size-10 lg:size-22.5 opacity-20"
            />
          </div>
          <p className="max-w-[500px] xl:max-w-[550px] w-[345px] md:w-[400px] lg:w-full xl:pl-12.5 text-center md:text-right text-xs md:text-sm lg:text-lg font-medium leading-[150%] font-montserrat">
            <span className="text-(--font-blue-color) font-semibold font-montserrat">
              {t("p2.1")}
            </span>
            {t("p2.2")}
            <span className="text-(--font-blue-color) font-semibold font-montserrat">
              {t("p2.3")}
            </span>
            {t("p2.4")}
            <span className="text-(--font-blue-color) font-semibold font-montserrat">
              {t("p2.5")}
            </span>
            {t("p2.6")}
            <span className="text-(--font-blue-color) font-semibold font-montserrat">
              {t("p2.7")}
            </span>
            {t("p2.8")}
            <span className="text-(--font-blue-color) font-semibold font-montserrat">
              {t("p2.9")}
            </span>
            {t("p2.10")}
            <br className="lg:hidden" />
            {t("p2.11")}
          </p>
        </div>

        <div className="bg-(--primary-color) h-0.5 w-37.5 md:w-91 rounded-xs my-7 md:my-6" />

        <div className="flex flex-col md:flex-row items-center md:justify-center gap-3 md:gap-5 lg:gap-7.5">
          <div className="md:hidden bg-(--primary-color)/10 flex justify-between gap-1.5 p-3 w-62 h-16 rounded-[4px]">
            <Image
              src="/badge-check.svg"
              alt="badge-check"
              width={90}
              height={90}
              className="size-10"
            />
            <Image
              src="/badge-check.svg"
              alt="badge-check"
              width={90}
              height={90}
              className="size-10 opacity-75"
            />
            <Image
              src="/badge-check.svg"
              alt="badge-check"
              width={90}
              height={90}
              className="size-10 opacity-55"
            />
            <Image
              src="/badge-check.svg"
              alt="badge-check"
              width={90}
              height={90}
              className="size-10 opacity-35"
            />
            <Image
              src="/badge-check.svg"
              alt="badge-check"
              width={90}
              height={90}
              className="size-10 opacity-20"
            />
          </div>
          <div className="shrink-0 max-md:hidden bg-(--primary-color)/10 flex justify-between gap-1.5 lg:gap-2.5 p-3 lg:px-7 lg:py-6 w-62 lg:w-136.5 h-16 lg:h-34.5 rounded-[4px] lg:rounded-md">
            <Image
              src="/bag.svg"
              alt="bag"
              width={90}
              height={90}
              className="size-10 lg:size-22.5  opacity-20"
            />
            <Image
              src="/bag.svg"
              alt="bag"
              width={90}
              height={90}
              className="size-10 lg:size-22.5 opacity-35"
            />
            <Image
              src="/bag.svg"
              alt="bag"
              width={90}
              height={90}
              className="size-10 lg:size-22.5 opacity-55"
            />
            <Image
              src="/bag.svg"
              alt="bag"
              width={90}
              height={90}
              className="size-10 lg:size-22.5 opacity-75"
            />
            <Image
              src="/bag.svg"
              alt="bag"
              width={90}
              height={90}
              className="size-10 lg:size-22.5"
            />
          </div>
          <p className="max-w-[550px] w-[330.3px] md:w-[425px] lg:w-full text-center md:text-left text-xs md:text-sm lg:text-lg font-medium leading-[150%] font-montserrat">
            {t("p3.1")}
            <span className="text-(--font-blue-color) font-semibold font-montserrat">
              {t("p3.2.1")}
              <br className="hidden md:block lg:hidden xl:block" />
              {t("p3.2.2")}
            </span>
            {t("p3.3")}
            <span className="text-(--font-blue-color) font-semibold font-montserrat">
              {t("p3.4")}
            </span>
            {t("p3.5")}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-9 lg:gap-14 mt-12 md:mt-16 lg:mt-20 bg-(--primary-color) py-6 md:py-8 lg:py-10 px-3 md:px-8 lg:px-12 rounded-md lg:rounded-[12px]">
        <Image
          src="/big-check.svg"
          alt="Мы классные"
          width={182}
          height={182}
          className="size-20 md:size-30 lg:size-45.5"
        />
        <div className="flex flex-col items-center md:items-start">
          <p className="sub2-font-nunito-sans  w-[290px] md:w-[410px] lg:w-[566px] text-center md:text-start text-[15px] md:text-xl lg:text-[28px] leading-[140%] lg:leading-[129%]">
            {t("p4")}
          </p>
          <p className="w-[300px] lg:w-[400px] mt-2 md:mt-3.5 lg:mt-5 text-center md:text-start text-xs md:text-sm lg:text-lg font-medium leading-[150%] font-montserrat">
            {t("p5")}
          </p>
        </div>
      </div>
    </div>
  );
}
