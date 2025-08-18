"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebaseClient";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function LoginPage() {
  const t = useTranslations("LoginPage");

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, pass);
      router.push("/dashboard");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err.code === "auth/invalid-credential") {
        alert(t("error"));
      } else {
        alert(err.message);
      }
    }
  }

  return (
    <div className="w-full flex flex-col items-center">
      <Link href={"/"} className="cursor-pointer flex flex-col items-center">
        <Logo />
        {t("title")}
      </Link>

      <form
        onSubmit={handleLogin}
        className="mt-10 flex flex-col items-center bg-white rounded-md p-9 custom-shadow w-full max-w-[548px]"
      >
        <input
          className="mb-4 lg:mb-5 border border-[#e0e0e0] py-2.5 px-4 w-full h-11 rounded-sm font-montserrat font-medium text-base leading-[150%] placeholder:opacity-40 placeholder:text-[#272835]"
          placeholder="Email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="mb-4 lg:mb-5 border border-[#e0e0e0] py-2.5 px-4 w-full h-11 rounded-sm font-montserrat font-medium text-base leading-[150%] placeholder:opacity-40 placeholder:text-[#272835]"
          placeholder={t("input")}
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
          type="password"
        />
        <button
          className="hover:drop-shadow-md max-lg:hover:drop-shadow-sm mt-7 rounded-[4px] bg-(--primary-color) h-12 w-full max-w-75 flex justify-center items-center font-montserrat font-semibold text-base leading-[125%] text-(--font-hover-color) tracking-[-0.01em]"
          type="submit"
        >
          {t("button")}
        </button>
      </form>
    </div>
  );
}
