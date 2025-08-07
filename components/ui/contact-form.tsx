"use client";

export function ContactForm() {
	function onsubmit() {}

	return (
		<form
			action="POST"
			onSubmit={onsubmit}
			className="flex flex-col items-center bg-white rounded-md p-9 form-shadow w-full"
		>
			<p className="text-center text-2xl leading-[129%] mb-7">
				Заявка на звонок
			</p>
			<input
				className="mb-4 border border-[#e0e0e0] py-2.5 px-4 w-full h-11 rounded-sm font-montserrat font-medium text-base leading-[150%] placeholder:opacity-40 placeholder:text-[#272835]"
				placeholder="Имя"
			/>
			<input
				className="mb-4 border border-[#e0e0e0] py-2.5 px-4 w-full h-11 rounded-sm font-montserrat font-medium text-base leading-[150%] placeholder:opacity-40 placeholder:text-[#272835]"
				placeholder="Услуга"
			/>
			<input className="border border-[#e0e0e0] py-2.5 px-4 w-full h-11 rounded-sm font-montserrat font-medium text-base leading-[150%] placeholder:opacity-40 placeholder:text-[#272835]" />
			<button
				className="mt-7 rounded-[4px] bg-(--primary-color) h-12 w-full flex justify-center items-center font-montserrat font-semibold text-base leading-[125%] text-(--font-hover-color) tracking-[-0.01em]"
				type="submit"
			>
				Отправить
			</button>
		</form>
	);
}
