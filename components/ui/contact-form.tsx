"use client";

import { FormEvent, useState } from "react";
import { PhoneInput } from "./phone-input";
import { useTranslations } from "next-intl";

export function ContactForm({ key }: { key: string }) {
  const t = useTranslations("HomePage.ContactForm");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isDisabled, setDisabled] = useState(false);

  async function onsubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDisabled(true);

    if (name.trim() == "") {
      alert("Некорректное имя!");
      setDisabled(false);
      return;
    } else if (message.trim() == "") {
      alert("Некорректная услуга!");
      setDisabled(false);
      return;
    }

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, message, phoneNumber }),
    });

    alert("Отправлено!");

    setName("");
    setMessage("");
    setPhoneNumber("");
    setDisabled(false);
  }

  return (
    <form
      key={key}
      onSubmit={(e) => onsubmit(e)}
      className="flex flex-col items-center lg:items-start bg-white rounded-md p-9 custom-shadow w-full max-w-[548px]"
    >
      <p className="sub2-font-nunito-sans mb-7 text-center text-2xl lg:text-[28px] leading-[129%]">
        {t("p")}
      </p>
      <input
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-4 lg:mb-5 border border-[#e0e0e0] py-2.5 px-4 w-full h-11 rounded-sm font-montserrat font-medium text-base leading-[150%] placeholder:opacity-40 placeholder:text-[#272835]"
        placeholder={t("input1")}
      />
      <input
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="mb-4 lg:mb-5 border border-[#e0e0e0] py-2.5 px-4 w-full h-11 rounded-sm font-montserrat font-medium text-base leading-[150%] placeholder:opacity-40 placeholder:text-[#272835]"
        placeholder={t("input2")}
      />
      <PhoneInput phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
      <button
        className="disabled:bg-amber-200 hover:drop-shadow-md max-lg:hover:drop-shadow-sm mt-7 rounded-[4px] bg-(--primary-color) h-12 w-full max-w-75 flex justify-center items-center font-montserrat font-semibold text-base leading-[125%] text-(--font-hover-color) tracking-[-0.01em]"
        type="submit"
        disabled={isDisabled}
      >
        {t("button")}
      </button>
    </form>
  );
}
