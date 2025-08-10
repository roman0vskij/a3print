import Image from "next/image";

export function NotFoundOffer() {
  return (
    <div className="w-full bg-(--primary-color)">
      <div className="w-full lg:max-w-[1024px] xl:max-w-[1440px] px-3.75 lg:pl-5 xl:pl-[177px] mx-auto xl:pr-0 pt-12 md:pt-14.5 lg:py-18.75 pb-12.5 flex flex-col lg:flex-row items-center gap-7.5 lg:gap-20 xl:gap-29">
        <Image
          src="/no-file.svg"
          alt="Не нашли услугу?"
          width={326.71}
          height={415.82}
          className="w-25 md:w-50 lg:w-[327px]"
        />
        <div className="flex flex-col gap-6 lg:gap-10.5 w-full">
          <h3 className="w-full max-w-175 mx-auto text-center text-4xl md:text-[40px] font-medium leading-[129%] text-(--font-secondary-color) lg:hidden">
            Не нашли нужную продукцию?
          </h3>
          <h3 className="w-full text-[50px] font-medium leading-[129%] text-(--font-secondary-color) hidden lg:block">
            Не нашли нужные полиграфические услуги?
          </h3>

          <div className="lg:hidden mx-auto max-w-84 md:max-w-110">
            <p className="text-center text-sm md:text-lg font-medium leading-[150%] font-montserrat text-(--font-secondary-color)">
              Если вы не нашли нужный вариант на сайте, мы всегда готовы
              обсудить ваш проект и предложить индивидуальное решение
            </p>
            <p className="text-center text-sm md:text-lg font-medium leading-[150%] font-montserrat text-(--font-secondary-color) mt-1.5">
              Свяжитесь с нами или оставьте заявку — вместе найдём лучшее
              решение
            </p>
          </div>

          <div className="hidden lg:block max-w-[632px]">
            <p className="text-[22px] font-medium leading-[150%] font-montserrat text-(--font-secondary-color)">
              Это не проблема — подберём индивидуальное решение для вашей идеи
            </p>
            <p className="text-[22px] font-medium leading-[150%] font-montserrat text-(--font-secondary-color) mt-1.5">
              Напишите нам и получите профессиональную консультацию от
              типографии А3 ПРИНТ!
            </p>
          </div>

          <div className="flex flex-col items-center lg:flex-row gap-3 lg:gap-5">
            <button className="flex justify-center items-center bg-(--font-secondary-color) rounded-[4px] px-5 py-4 h-12 lg:h-13 w-86.25 lg:w-62.5 font-montserrat font-semibold text-base leading-[125%] tracking-[-0.01em] text-white">
              Рассчитать заказ
            </button>
            <button className="border-2 border-(--font-secondary-color) flex justify-center items-center  rounded-[4px] px-5 py-4 h-12 lg:h-13 w-86.25 lg:w-62.5 font-montserrat font-semibold text-base leading-[125%] tracking-[-0.01em] text-(--font-secondary-color)">
              Задать вопрос
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
