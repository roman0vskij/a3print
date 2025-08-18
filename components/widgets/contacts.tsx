import Image from "next/image";
import { ContactForm } from "../ui/contact-form";
import { useTranslations } from "next-intl";

export function Contacts() {
  const t = useTranslations("HomePage.Contacts");

  return (
    <div
      id="contacts"
      className="flex flex-col lg:flex-row lg:gap-5 lg:justify-between items-center pt-12 py-11.5 md:py-15 lg:pt-20 lg:pb-40 px-3.75 lg:px-5 xl:px-0 w-full max-w-[1128px]"
    >
      <div className="lg:order-2">
        <h3 className="text-center lg:text-start w-87 md:w-114 lg:w-124 text-[28px] md:text-4xl lg:text-[40px] font-medium leading-[125%] lg:leading-[129%]">
          {t("h3.1")}
          <span className="text-[28px] md:text-4xl lg:text-[40px] leading-[125%] lg:leading-[129%] text-(--font-blue-color)">
            <br />
            {t("h3.2")}
          </span>
        </h3>

        <div className="flex justify-between lg:flex-col lg:gap-6 mt-12 mb-8 lg:mb-0 w-full max-w-[345px] md:max-w-110 lg:max-w-122">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <div className="size-10 md:size-12 rounded-sm bg-(--primary-color) flex justify-center items-center">
              <Image
                src="/phone.svg"
                alt="телефон"
                width={28}
                height={28}
                className="size-6 md:size-7"
              />
            </div>
            <p className="text-base md:text-xl lg:text-2xl leading-[129%] text-center">
              +7 777 130 5838
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <div className="size-10 md:size-12 rounded-sm bg-(--primary-color) flex justify-center items-center">
              <Image
                src="/mail.svg"
                alt="почта"
                width={32}
                height={32}
                className="size-7 md:size-8"
              />
            </div>
            <p className="text-base md:text-xl lg:text-2xl leading-[129%] text-center">
              info@a3print.kz
            </p>
          </div>
        </div>
      </div>
      <ContactForm key="contact-form" />
    </div>
  );
}
