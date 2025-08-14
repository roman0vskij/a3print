"use client";

import { FormEvent } from "react";
import { PhoneInput } from "./phone-input";
import { X } from "lucide-react";

type TProps = {
	close: () => void;
};

export function NotFoundForm({ close }: TProps) {
	function onsubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		console.log(e);
		close();
	}

	return (
		<form
			onClick={(e) => e.stopPropagation()}
			onSubmit={(e) => onsubmit(e)}
			className="flex flex-col items-center bg-white rounded-md p-9 w-full max-w-[548px]"
		>
			<div className="flex w-full items-center mb-7">
				<p className="text-center text-2xl lg:text-[28px] leading-[129%] w-full ml-2 px-2">
					Заявка на звонок
				</p>
				<button
					type="reset"
					onClick={(e) => {
						e.stopPropagation();
						close();
					}}
				>
					<X className="shrink-0 grow-0" />
				</button>
			</div>
			<input
				name="name"
				className="mb-4 lg:mb-5 border border-[#e0e0e0] py-2.5 px-4 w-full h-11 rounded-sm font-montserrat font-medium text-base leading-[150%] placeholder:opacity-40 placeholder:text-[#272835]"
				placeholder="Имя"
			/>
			<input
				name="offer"
				className="mb-4 lg:mb-5 border border-[#e0e0e0] py-2.5 px-4 w-full h-11 rounded-sm font-montserrat font-medium text-base leading-[150%] placeholder:opacity-40 placeholder:text-[#272835]"
				placeholder="Услуга/Вопрос"
			/>
			<PhoneInput />
			<button
				className="hover:drop-shadow-md max-lg:hover:drop-shadow-sm mt-7 rounded-[4px] bg-(--primary-color) h-12 w-full max-w-75 flex justify-center items-center font-montserrat font-semibold text-base leading-[125%] text-(--font-hover-color) tracking-[-0.01em]"
				type="submit"
			>
				Отправить
			</button>
		</form>
	);
}
