"use client";

import Image from "next/image";
import { Logo } from "../ui/logo";
import { useState } from "react";
import { LanguageSwitcher } from "../ui/language-switcher";
import { useTranslations } from "next-intl";

export function Header() {
  const [isOpen, setOpen] = useState(false);
  const t = useTranslations("HomePage.Header");

  function toggle() {
    setOpen((prev) => !prev);
  }

  return (
    <header className="fixed bg-white z-10 h-fit w-screen">
      <div className="bg-white mx-auto flex items-end px-3.75 lg:px-10 w-full h-fit max-w-[1440px]">
        <Logo />
        {isOpen ? (
          <div className="w-full bg-white">
            <div className="w-full lg:hidden flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        ) : (
          <div className="mx-auto max-lg:mb-1.5 flex justify-center items-center lg:justify-end lg:items-end lg:w-full gap-4">
            <a
              href="tel:+77771305838"
              className="lg:hidden lg:mb-5 lg:mr-7 text-center font-montserrat text-xs leading-[129%] tracking-[0.03em] lg:tracking-normal font-medium"
            >
              +7 777 130 5838
            </a>
            <p className="max-lg:hidden lg:mb-5 lg:mr-7 text-center font-montserrat text-base leading-[129%] tracking-[0.03em] lg:tracking-normal font-medium">
              +7 777 130 5838
            </p>
            <div className="lg:hidden">
              <LanguageSwitcher isLittle />
            </div>
            <div className="max-lg:hidden">
              <LanguageSwitcher />
            </div>
          </div>
        )}
        <button
          className="w-11.25 h-full flex justify-end items-end lg:ml-[75px]"
          onClick={toggle}
        >
          {isOpen ? (
            <Image
              src="/cross.svg"
              alt="close menu"
              width={19}
              height={19}
              className="w-[18.8px] h-[18.41px] mb-2 lg:mb-[20.59px] mr-[8.2px]"
            />
          ) : (
            <Image
              src="/burger-menu.svg"
              alt="open menu"
              width={35}
              height={12}
              className="w-8.75 h-3 mb-2.5 lg:mb-6"
            />
          )}
        </button>
        {isOpen && (
          <div className="absolute top-14 lg:top-26.25 left-0 pt-25 md:pt-20 lg:pt-15 flex flex-col items-center gap-10 h-screen w-[101vw] bg-white no-doc-scroll overflow-hidden">
            <a
              className="font-medium text-[28px] md:text-5xl lg:text-6xl leading-[122%] lg:leading-[129%] text-center lg:text-(--font-hover-color) a-hover"
              href="#about-typography"
              onClick={toggle}
            >
              <div className="hidden md:block bg-(--primary-color)" />
              <p className="font-nunito-sans">{t("1")}</p>
              <div className="hidden md:block bg-(--primary-color)" />
            </a>
            <a
              className="font-medium text-[28px] md:text-5xl lg:text-6xl leading-[122%] lg:leading-[129%] text-center lg:text-(--font-hover-color) a-hover"
              href="#what-we-offer"
              onClick={toggle}
            >
              <div className="hidden md:block bg-(--primary-color)" />
              <p className="font-nunito-sans">{t("2")}</p>
              <div className="hidden md:block bg-(--primary-color)" />
            </a>
            <a
              className="font-medium text-[28px] md:text-5xl lg:text-6xl leading-[122%] lg:leading-[129%] text-center lg:text-(--font-hover-color) a-hover"
              href="#portfolio"
              onClick={toggle}
            >
              <div className="hidden md:block bg-(--primary-color)" />
              <p className="font-nunito-sans">{t("3")}</p>
              <div className="hidden md:block bg-(--primary-color)" />
            </a>
            <a
              className="font-medium text-[28px] md:text-5xl lg:text-6xl leading-[122%] lg:leading-[129%] text-center lg:text-(--font-hover-color) a-hover"
              href="#stages-of-work"
              onClick={toggle}
            >
              <div className="hidden md:block bg-(--primary-color)" />
              <p className="font-nunito-sans">{t("4")}</p>
              <div className="hidden md:block bg-(--primary-color)" />
            </a>
            <a
              className="font-medium text-[28px] md:text-5xl lg:text-6xl leading-[122%] lg:leading-[129%] text-center lg:text-(--font-hover-color) a-hover"
              href="#contacts"
              onClick={toggle}
            >
              <div className="hidden md:block bg-(--primary-color)" />
              <p className="font-nunito-sans">{t("5")}</p>
              <div className="hidden md:block bg-(--primary-color)" />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
