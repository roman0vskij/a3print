import Image from "next/image";
import { Title } from "../ui/title";

export function AboutTypography() {
  return (
    <div
      id="about-typography"
      className="flex flex-col items-center w-full pt-10 lg:pt-20 px-3.75 pb-9.5 lg:pb-17.75"
    >
      <Title title="О типографии" />

      <p className="w-full max-w-[345px] mt-4 text-center text-xl leading-[129%]">
        А3 ПРИНТ — надежная типография в Алматы.
        <br />
        <span className="text-(--font-blue-color)">И это не просто слова!</span>
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
            Когда-то мы были рекламным агентством, <br />а сегодня это
            полиграфический центр со своим технопарком на 16+ единиц
            оборудования и команда, которая знает всё о печати. Мы следим за
            трендами в полиграфии и каждые полгода обновляем оборудование и
            внедряем новые технологии — потому что для нас важно, чтобы{" "}
            <span className="max-lg:text-center text-xs md:text-sm lg:text-base leading-[140%] font-semibold text-(--font-blue-color) font-montserrat">
              результат радовал и наших клиентов, и клиентов наших клиентов
            </span>
          </p>
        </div>

        <div className="rounded-md w-[345px] lg:w-[300px] h-[236px] lg:h-110 bg-[url(/side-view-woman-with-color-palette.jpg)] bg-bottom bg-cover" />

        <div className="flex flex-col items-center lg:items-start">
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
            За 17 лет в рекламно-печатном бизнесе мы научились не просто
            “печатать по ТЗ”, а{" "}
            <span className="max-lg:text-center text-xs md:text-sm lg:text-base leading-[140%] font-semibold text-(--font-blue-color) font-montserrat">
              глубоко разбираться в задачах бизнеса.
            </span>{" "}
            Предлагаем решения, которые экономят время, деньги и нервы — и
            доставляем заказы вовремя прямо к вам в руки. Нам доверяют заказы
            любой сложности: от фото <br />
            на холсте в подарок самым близким людям <br />
            до архитектурных проектов, оформления витрин <br />и изготовления
            наружных вывесок. И независимо <br />
            от стоимости и тиража, вы можете рассчитывать <br />
            на то, что{" "}
            <span className="max-lg:text-center text-xs md:text-sm lg:text-base leading-[140%] font-semibold text-(--font-blue-color) font-montserrat">
              каждый заказ в А3 ПРИНТ будет выполнен безупречно
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
