"use client";

import Image from "next/image";
import { NotFoundForm } from "../ui/not-found-form";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useTranslations } from "next-intl";

export function NotFoundOffer() {
  const [isOpen, setOpen] = useState(false);
  const t = useTranslations("HomePage.NotFoundOffer");

  return (
    <div className="relative w-full bg-(--primary-color)">
      <div className="w-full lg:max-w-[1024px] xl:max-w-[1440px] px-3.75 lg:pl-5 xl:pl-[177px] mx-auto xl:pr-0 pt-12 md:pt-14.5 lg:py-18.75 pb-12.5 flex flex-col lg:flex-row items-center gap-7.5 lg:gap-20 xl:gap-29">
        <Image
          src="/no-file.svg"
          alt="Не нашли услугу?"
          width={326.71}
          height={415.82}
          className="w-25 md:w-50 lg:w-[327px]"
        />
        <div className="flex flex-col gap-6 lg:gap-10.5 w-full">
          <h3 className="w-full max-w-175 mx-auto text-center text-3xl md:text-[40px] font-medium leading-[129%] text-(--font-secondary-color) lg:hidden">
            {t("h3.1")}
          </h3>
          <h3 className="w-full text-[50px] font-medium leading-[129%] text-(--font-secondary-color) hidden lg:block">
            {t("h3.2")}
          </h3>

          <div className="lg:hidden mx-auto max-w-84 md:max-w-110">
            <p className="text-center text-sm md:text-lg font-medium leading-[150%] font-montserrat text-(--font-secondary-color)">
              {t("p1.1")}
            </p>
            <p className="text-center text-sm md:text-lg font-medium leading-[150%] font-montserrat text-(--font-secondary-color) mt-1.5">
              {t("p2.1")}
            </p>
          </div>

          <div className="hidden lg:block max-w-[632px]">
            <p className="text-[22px] font-medium leading-[150%] font-montserrat text-(--font-secondary-color)">
              {t("p1.2")}
            </p>
            <p className="text-[22px] font-medium leading-[150%] font-montserrat text-(--font-secondary-color) mt-1.5">
              {t("p2.2")}
            </p>
          </div>

          <div className="flex flex-col items-center lg:flex-row gap-3 lg:gap-5">
            <button
              onClick={() => setOpen(true)}
              className="hover:drop-shadow-md max-lg:hover:drop-shadow-sm flex justify-center items-center bg-(--font-secondary-color) rounded-[4px] px-5 py-4 h-12 lg:h-13 w-86.25 lg:w-62.5 font-montserrat font-semibold text-base leading-[125%] tracking-[-0.01em] text-white"
            >
              {t("button1")}
            </button>
            <button
              onClick={() => setOpen(true)}
              className="hover:drop-shadow-md max-lg:hover:drop-shadow-sm border-2 border-(--font-secondary-color) flex justify-center items-center  rounded-[4px] px-5 py-4 h-12 lg:h-13 w-86.25 lg:w-62.5 font-montserrat font-semibold text-base leading-[125%] tracking-[-0.01em] text-(--font-secondary-color)"
            >
              {t("button2")}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className={cn(
            " bg-black/50 fixed w-screen h-screen left-0 top-0 flex justify-center items-center px-5 z-20"
          )}
          onClick={() => setOpen(false)}
        >
          <NotFoundForm
            close={() => setOpen(false)}
            key="not-found-offer-form"
          />
        </div>
      )}
    </div>
  );
}
