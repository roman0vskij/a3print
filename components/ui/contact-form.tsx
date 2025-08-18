"use client";

import { FormEvent } from "react";
import { PhoneInput } from "./phone-input";
import { useTranslations } from "next-intl";

export function ContactForm({ key }: { key: string }) {
  const t = useTranslations("HomePage.ContactForm");

  function onsubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <form
      key={key}
      onSubmit={(e) => onsubmit(e)}
      className="flex flex-col items-center lg:items-start bg-white rounded-md p-9 custom-shadow w-full max-w-[548px]"
    >
      <p className="mb-7 text-center text-2xl lg:text-[28px] leading-[129%]">
        {t("p")}
      </p>
      <input
        className="mb-4 lg:mb-5 border border-[#e0e0e0] py-2.5 px-4 w-full h-11 rounded-sm font-montserrat font-medium text-base leading-[150%] placeholder:opacity-40 placeholder:text-[#272835]"
        placeholder={t("input1")}
      />
      <input
        className="mb-4 lg:mb-5 border border-[#e0e0e0] py-2.5 px-4 w-full h-11 rounded-sm font-montserrat font-medium text-base leading-[150%] placeholder:opacity-40 placeholder:text-[#272835]"
        placeholder={t("input2")}
      />
      <PhoneInput />
      <button
        className="hover:drop-shadow-md max-lg:hover:drop-shadow-sm mt-7 rounded-[4px] bg-(--primary-color) h-12 w-full max-w-75 flex justify-center items-center font-montserrat font-semibold text-base leading-[125%] text-(--font-hover-color) tracking-[-0.01em]"
        type="submit"
      >
        {t("button")}
      </button>
    </form>
  );
}
