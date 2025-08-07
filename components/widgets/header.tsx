"use client";

import Image from "next/image";
import { Logo } from "../ui/logo";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "../ui/language-switcher";

export function Header() {
	const [isOpen, setOpen] = useState(false);

	function toggle() {
		setOpen((prev) => !prev);
	}

	return (
		<header
			className={cn(
				"z-10 flex items-end px-3.75 w-screen h-11",
				isOpen ? "fixed bg-white" : "absolute bg-transparent"
			)}
		>
			<Logo />
			{isOpen ? (
				<LanguageSwitcher />
			) : (
				<p className="mx-auto mb-[0.3px] text-center font-montserrat text-base leading-[129%] tracking-[0.03em] font-medium">
					+7 777 130 5838
				</p>
			)}
			<button
				className="w-11.25 h-full flex justify-end items-end"
				onClick={toggle}
			>
				{isOpen ? (
					<Image
						src="/cross.svg"
						alt="close menu"
						width={19}
						height={19}
						className="w-[18.8px] h-[18.41px] mb-[2.09px] mr-[8.2px]"
					/>
				) : (
					<Image
						src="/burger-menu.svg"
						alt="open menu"
						width={35}
						height={12}
						className="w-8.75 h-3 mb-[5.3px]"
					/>
				)}
			</button>
			{isOpen && (
				<div className="absolute top-11 left-0 pt-25 flex flex-col items-center gap-10 h-screen w-[101vw] bg-white no-doc-scroll overflow-hidden">
					<a
						className="font-medium text-[28px] leading-[122%] text-center"
						href="#about-typography"
						onClick={toggle}
					>
						О нас
					</a>
					<a
						className="font-medium text-[28px] leading-[122%] text-center"
						href="#what-we-offer"
						onClick={toggle}
					>
						Услуги
					</a>
					<a
						className="font-medium text-[28px] leading-[122%] text-center"
						href="#portfolio"
						onClick={toggle}
					>
						Портфолио
					</a>
					<a
						className="font-medium text-[28px] leading-[122%] text-center"
						href="#stages-of-work"
						onClick={toggle}
					>
						Этапы работы
					</a>
					<a
						className="font-medium text-[28px] leading-[122%] text-center"
						href="#contacts"
						onClick={toggle}
					>
						Наши контакты
					</a>
				</div>
			)}
		</header>
	);
}
