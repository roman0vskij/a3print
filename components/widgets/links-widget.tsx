"use client";

import Image from "next/image";
import { useState } from "react";

function PopUp() {
  return (
    <div className="fixed flex flex-col items-center w-15 h-fit p-3.5 rounded-full gap-2.5 bg-white bottom-22 lg:bottom-27 right-5 lg:right-10 links-widget-shadow">
      <a href="https://ig.me/m/kksyushkka">
        <Image src="/links-widget/inst.svg" alt="inst" width={32} height={32} />
      </a>
      <div className="h-0.25 w-9.5 bg-[#d9d9d9]" />
      <a href="https://wa.me/77771305838">
        <Image
          src="/links-widget/whatsapp.svg"
          alt="whatsapp"
          width={32}
          height={32}
        />
      </a>
      <div className="lg:hidden h-0.25 w-9.5 bg-[#d9d9d9]" />
      <a className="lg:hidden" href="tel:+77771305838">
        <Image
          src="/links-widget/phone.svg"
          alt="phone"
          width={32}
          height={32}
        />
      </a>
    </div>
  );
}

export function LinkWidget() {
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      <button className=""></button>

      <button
        onClick={() => setFlipped((prev) => !prev)}
        className="fixed right-5 lg:right-10 bottom-5 lg:bottom-10 size-15 rounded-full bg-(--font-blue-color) flex items-center justify-center cursor-pointer"
        style={{ perspective: "600px" }}
      >
        <span
          className={`transition-transform duration-500 block relative size-12`}
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          <Image
            src="/links-widget/cross.svg"
            alt="X"
            width={48}
            height={48}
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          />
          <span
            className="absolute inset-0 flex items-center justify-center"
            style={{ backfaceVisibility: "hidden" }}
          >
            <Image
              src="/links-widget/chat.svg"
              alt="chat"
              width={36}
              height={36}
            />
          </span>
        </span>
      </button>

      {flipped && <PopUp />}
    </>
  );
}
