import Image from "next/image";
import { Title } from "../ui/title";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";

type TStage = {
  img: {
    src: string;
    alt: string;
  };
  title: string;
  subtext?: string;
};

type TProps = {
  props: TStage;
  i: number;
  children: React.ReactNode;
};

function StageOfWork({ props, i, children }: TProps) {
  return (
    <div className="flex md:flex-col md:items-center gap-4 z-1 md:max-w-[425px] w-full">
      <div
        className={cn(
          "flex justify-center items-center rounded-[4px] lg:rounded-[8px] size-12 lg:size-15 shrink-0 md:bg-(--primary-color)",
          i === 0
            ? "bg-[#fffce6]"
            : i === 1
            ? "bg-[#fff0b7]"
            : i === 2
            ? "bg-[#fee898]"
            : i === 3
            ? "bg-[#fdd85a]"
            : i === 4
            ? "bg-[#fccd2f]"
            : "bg-[#fbc40e]"
        )}
      >
        <Image
          src={props.img.src}
          alt={props.img.alt}
          width={36}
          height={36}
          className={cn(
            "size-8 lg:size-9",
            i === 0
              ? "opacity-60"
              : i === 1
              ? "opacity-65"
              : i === 2
              ? "opacity-75"
              : i === 3
              ? "opacity-80"
              : i === 4
              ? "opacity-90"
              : ""
          )}
        />
      </div>
      <div className="flex flex-col gap-1">
        {props.subtext ? (
          <p className="font-semibold text-base md:text-xl lg:text-2xl md:text-center leading-[150%] font-montserrat">
            {props.title}{" "}
            <span className="font-semibold text-base md:text-xl lg:text-2xl md:text-center leading-[150%] font-montserrat text-[#b9b9b9]">
              {props.subtext}
            </span>
          </p>
        ) : (
          <p className="font-semibold text-base md:text-xl lg:text-2xl md:text-center leading-[150%] font-montserrat">
            {props.title}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}

export function StagesOfWork() {
  const ruStages: TStage[] = [
    {
      img: {
        src: "/stages/stage1.svg",
        alt: "Заявка и консультация",
      },
      title: "1. Заявка и консультация",
    },
    {
      img: { src: "/stages/stage2.svg", alt: "Расчет стоимости" },
      title: "2. Расчет стоимости",
    },
    {
      img: {
        src: "/stages/stage3.svg",
        alt: "Дизайн и проверка макета",
      },
      title: "3. Дизайн и проверка макета",
    },
    {
      img: { src: "/stages/stage4.svg", alt: "Печать" },
      title: "4. Печать",
    },
    {
      img: {
        src: "/stages/stage5.svg",
        alt: "Выдача заказа и доставка",
      },
      title: "5. Выдача заказа и доставка",
    },
    {
      img: { src: "/stages/stage6.svg", alt: "Монтаж" },
      title: "6. Монтаж",
      subtext: "(по необходимости)",
    },
  ];

  const kzStages: TStage[] = [
    {
      img: {
        src: "/stages/stage1.svg",
        alt: "Өтінім беру және кеңес алу",
      },
      title: "1. Өтінім беру және кеңес алу",
    },
    {
      img: { src: "/stages/stage2.svg", alt: "Бағасын есептеу" },
      title: "2. Бағасын есептеу",
    },
    {
      img: {
        src: "/stages/stage3.svg",
        alt: "Дизайн және макетті тексеру",
      },
      title: "3. Дизайн және макетті тексеру",
    },
    {
      img: { src: "/stages/stage4.svg", alt: "Басып шығару" },
      title: "4. Басып шығару",
    },
    {
      img: {
        src: "/stages/stage5.svg",
        alt: "Тапсырысты беру және жеткізу",
      },
      title: "5. Тапсырысты беру және жеткізу",
    },
    {
      img: { src: "/stages/stage6.svg", alt: "Монтаж" },
      title: "6. Монтаж",
      subtext: "(қажет болса)",
    },
  ];

  const locale = useLocale();

  const stages = locale === "kz" ? kzStages : ruStages;

  const t = useTranslations("HomePage.StagesOfWork");

  return (
    <div
      id="stages-of-work"
      className="mx-auto relative flex flex-col items-center px-3.75 py-10 lg:pb-9.25 md:w-full max-w-[1440px]"
    >
      <Title title={t("title")} />

      <p className="sub2-font-nunito-sans w-70 md:w-full mt-3 text-center text-[15px] md:text-xl lg:text-[28px] leading-[140%]">
        {t("p1.0")}
        <span className="sub2-font-nunito-sans text-(--font-blue-color)">
          {t("p1.1")}
        </span>
        {t("p1.2")}
        <br className="lg:hidden" />
        {t("p1.3")}
      </p>

      <div className="relative max-md:max-w-[345px] flex flex-col md:flex-row md:flex-wrap items-center md:items-start mt-12 gap-7 lg:gap-x-20 lg:gap-y-10 md:justify-center">
        <StageOfWork props={stages[0]} i={0} key={`stage1`}>
          <p className="md:text-center font-medium text-[11px] md:text-xs lg:text-base leading-[150%] font-montserrat opacity-80 whitespace-pre-line">
            {t("stage1")}
          </p>
        </StageOfWork>
        <StageOfWork props={stages[1]} i={1} key={`stage2`}>
          <p className="md:text-center font-medium text-[11px] md:text-xs lg:text-base leading-[150%] font-montserrat opacity-80 whitespace-pre-line">
            {t("stage2")}
          </p>
        </StageOfWork>
        <StageOfWork props={stages[2]} i={2} key={`stage3`}>
          <p className="max-md:max-w-65 md:text-center font-medium text-[11px] md:text-xs lg:text-base leading-[150%] font-montserrat opacity-80 whitespace-pre-line">
            {t("stage3.1")}
            <br className="md:hidden" />
            <span className="text-[11px] md:text-xs lg:text-base leading-[150%] font-montserrat whitespace-pre-line font-semibold opacity-80">
              {t("stage3.2.1")}
              <br className="md:hidden" />
              {t("stage3.2.2")}
            </span>
            {t("stage3.3")}
            <br className="md:hidden" />
            {t("stage3.4")}
          </p>
        </StageOfWork>
        <StageOfWork props={stages[3]} i={3} key={`stage4`}>
          <p className="md:text-center font-medium text-[11px] md:text-xs lg:text-base leading-[150%] font-montserrat opacity-80 whitespace-pre-line">
            {t("stage4.1")}
            <br className="md:hidden" />
            {t("stage4.2")}
          </p>
        </StageOfWork>
        <StageOfWork props={stages[4]} i={4} key={`stage5`}>
          <p className="md:text-center font-medium text-[11px] md:text-xs lg:text-base leading-[150%] font-montserrat opacity-80 whitespace-pre-line">
            {t("stage5.1")}
            <br className="md:hidden" />
            {t("stage5.2")}
          </p>
        </StageOfWork>
        <StageOfWork props={stages[5]} i={5} key={`stage6`}>
          <p className="md:text-center font-medium text-[11px] md:text-xs lg:text-base leading-[150%] font-montserrat opacity-80 whitespace-pre-line">
            {t("stage6.1")}
            <br className="md:hidden" />
            {t("stage6.2")}
          </p>
        </StageOfWork>
        <div className="absolute md:hidden left-5.75 top-10 w-0.5 h-[85%] bg-linear-to-b from-[#fff5cc] to-[#fbc40e]" />
      </div>
    </div>
  );
}
