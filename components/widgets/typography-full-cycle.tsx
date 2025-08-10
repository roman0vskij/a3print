import Image from "next/image";

export function TypographyFullCycle() {
  return (
    <div className="relative overflow-x-hidden w-full">
      <h1 className="w-full h-full mt-28 max-w-100 md:max-w-115 lg:max-w-145 xl:max-w-165 mx-auto text-center text-4xl md:text-5xl lg:text-6xl xl:text-[70px] font-medium leading-[122%] lg:leading-[129%]">
        Типография полного цикла
        <br />в Алматы
      </h1>
      <p className="w-full h-full mt-7 md:mt-8 lg:mt-9 xl:mt-10 mx-auto max-w-58 sm:max-w-90 lg:max-w-180 xl:max-w-200 text-center text-sm md:text-lg lg:text-xl xl:text-[22px] font-medium leading-[140%] font-montserrat">
        Печать визиток, баннеров, календарей и другой полиграфической продукции
        с доставкой по Алматы и Казахстану
      </p>
      <button className="flex justify-center items-center bg-(--primary-color) rounded-sm mx-auto mt-9 lg:mt-8 px-5 py-4 h-12 lg:h-13 w-65 lg:w-72.5 font-montserrat font-semibold text-base leading-[125%] tracking-[-0.01em] text-(--font-secondary-color)">
        Заказать печать сейчас
      </button>

      <div className="flex justify-center items-center flex-wrap mx-auto mt-13 md:mt-15 lg:mt-17 xl:mt-18.75 gap-5.75 lg:gap-12.25 w-71.5 md:w-full h-21.75 md:h-12.5">
        <Image
          src="/companies/company4.jpg"
          alt="2GIS"
          width={94.46}
          height={30}
          className="w-17.5 h-5.5 md:order-4 lg:w-23.75 lg:h-7.5"
        />
        <Image
          src="/companies/company5.jpg"
          alt="inDrive"
          width={105.1}
          height={30}
          className="w-19.5 h-5.5 md:order-5 lg:w-26.25 lg:h-7.5"
        />
        <Image
          src="/companies/company6.jpg"
          alt="КакТебе"
          width={110.21}
          height={35}
          className="w-20.5 h-6.5 md:order-6 lg:w-27.5 lg:h-8.75"
        />
        <Image
          src="/companies/company1.jpg"
          alt="акимат"
          width={50}
          height={50}
          className="size-9.25 md:order-1 lg:size-12.5"
        />
        <Image
          src="/companies/company2.jpg"
          alt="kingfisher"
          width={98.92}
          height={35}
          className="w-18.25 h-6.5 md:order-2 lg:w-24.75 lg:h-8.75"
        />
        <Image
          src="/companies/company3.jpg"
          alt="NINO"
          width={86.7}
          height={30}
          className="w-16 h-5.5 md:order-3 lg:w-21.75 lg:h-7.5"
        />
        <Image
          src="/companies/company7.jpg"
          alt="Coffee BOOM"
          width={55.89}
          height={50}
          className="w-10.25 h-9.25 md:order-7 lg:w-13.75 lg:h-12.5"
        />
      </div>

      <div className="absolute bg-contain animate-pulse translate-x-[-50%] bg-[url(/yellow-bg.svg)] top-[-136px] lg:top-[-170px] left-1/2 size-60 md:size-70 lg:size-87" />
      <div className="absolute bg-contain animate-pulse translate-x-[50%] bg-[url(/pink-bg.svg)] top-14.5 md:top-18.5 lg:top-24.5 right-0 md:right-7 lg:right-15 size-60.75 md:size-85 lg:size-111" />
      <div className="absolute bg-contain animate-pulse translate-x-[-50%] bg-[url(/blue-bg.svg)] top-27.5 md:top-19 lg:top-12.5 size-61.5 md:size-100 lg:size-136" />
    </div>
  );
}
