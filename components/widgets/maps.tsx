import Image from "next/image";

export function Maps() {
  return (
    <div className="flex flex-col items-center pt-12 lg:20 pb-18.25 lg:pb-22.75">
      <h3 className="text-center text-[26px] md:text-4xl lg:text-[50px] font-medium leading-[125%] lg:leading-[129%] max-w-90 md:max-w-180 lg:max-w-250 lg:mt-13.75 lg:order-2">
        <span className="text-center text-[26px] md:text-4xl lg:text-[50px] font-medium leading-[125%] lg:leading-[129%] text-(--font-blue-color)">
          Лучшая типография
        </span>{" "}
        в Алматы по версии 200+ клиентов!
      </h3>
      <p className="font-normal text-[15px] md:text-xl lg:text-[28px] leading-[140%] lg:leading-[129%] text-center mt-5 md:mt-7 lg:mt-10 mb-11.75 lg:mb-0 max-w-76 md:max-w-130 lg:max-w-180 lg:order-3">
        Нам доверяют бизнес полиграфию и индивидуальную печать, попробуйте
        обратиться один раз — и вы не захотите менять подрядчика
      </p>

      <div className="flex justify-center flex-wrap gap-x-10 lg:gap-x-25 xl:gap-x-36 gap-y-20.75 md:gap-y-43.75 max-w-[345px] lg:max-w-[1048px] lg:order-1">
        <a
          className="relative lg:order-2"
          href="https://yandex.by/maps/162/almaty/?ll=76.920440%2C43.261746&mode=poi&poi%5Bpoint%5D=76.919400%2C43.262960&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D179660209055&z=17.2"
          target="_blank"
        >
          <div className="rounded-full h-10.5 lg:h-25 w-37 lg:w-113 custom-shadow flex justify-center lg:justify-end lg:pr-12.5 items-center">
            <Image
              src="/maps/ya.svg"
              alt="yandex"
              width={270}
              height={54}
              className="w-28.75 lg:w-67.5 h-6 lg:h-13.5"
            />
          </div>
          <div className="absolute top-9.25 lg:-top-5 left-[50%] lg:-left-10 translate-x-[-50%] lg:translate-x-0 rounded-full size-15 lg:size-35 bg-(--primary-color) flex justify-center items-center text-[22px] lg:text-[50px] leading-[125%] lg:leading-[129%] text-(--font-hover-color)">
            5.0
          </div>
        </a>

        <a
          className="relative lg:order-1"
          href="https://2gis.kz/almaty/firm/70000001021102210/76.919356%2C43.262951?m=76.922958%2C43.262189%2F15.15%2Fp%2F1.58%2Fr%2F0"
          target="_blank"
        >
          <div className="rounded-full h-10.5 lg:h-25 w-37 lg:w-113 custom-shadow flex justify-center lg:justify-start lg:pl-12.5 items-center">
            <Image
              src="/maps/2g.svg"
              alt="2gis"
              width={198}
              height={64}
              className="w-21.25 lg:w-49.5 h-7 lg:h-16"
            />
          </div>
          <div className="absolute top-9.25 lg:-top-5 max-lg:left-[50%] lg:-right-10 translate-x-[-50%] lg:translate-x-0 rounded-full size-15 lg:size-35 bg-(--primary-color) flex justify-center items-center text-[22px] lg:text-[50px] leading-[125%] lg:leading-[129%] text-(--font-hover-color)">
            4.8
          </div>
        </a>

        <a
          className="relative lg:order-3"
          href="https://www.google.com/maps/place/%D0%903+%D0%9F%D0%A0%D0%98%D0%9D%D0%A2+%D0%9F%D0%BE%D0%BB%D0%B8%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9+%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81+%D1%83%D1%81%D0%BB%D1%83%D0%B3.+%D0%A2%D0%B8%D0%BF%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F+%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B/@43.2624194,76.918262,17z/data=!4m14!1m7!3m6!1s0x38836eaea610da71:0x124b49c03ca6a9f9!2z0JAzINCf0KDQmNCd0KIg0J_QvtC70LjQs9GA0LDRhNC40YfQtdGB0LrQuNC5INC60L7QvNC_0LvQtdC60YEg0YPRgdC70YPQsy4g0KLQuNC_0L7Qs9GA0LDRhNC40Y8g0JDQu9C80LDRgtGL!8m2!3d43.2629213!4d76.9194434!16s%2Fg%2F11cm09phy9!3m5!1s0x38836eaea610da71:0x124b49c03ca6a9f9!8m2!3d43.2629213!4d76.9194434!16s%2Fg%2F11cm09phy9?entry=ttu&g_ep=EgoyMDI1MDgwNS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
        >
          <div className="rounded-full h-10.5 lg:h-25 w-37 lg:w-113 custom-shadow flex justify-center items-center">
            <div className="absolute top-[-51px] lg:-top-30 left-[50%] translate-x-[-50%] rounded-full size-15 lg:size-35 bg-(--primary-color) flex justify-center items-center text-[22px] lg:text-[50px] leading-[125%] lg:leading-[129%] text-(--font-hover-color)">
              4.6
            </div>
            <Image
              src="/maps/ggl.jpg"
              alt="google"
              width={296}
              height={56}
              className="w-31.5 lg:w-74 h-6 lg:h-14"
            />
          </div>
        </a>
      </div>
    </div>
  );
}
