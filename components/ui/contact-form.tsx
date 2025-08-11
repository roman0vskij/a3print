"use client";

export function ContactForm() {
	function onsubmit() {}

	return (
		<form
			action="POST"
			onSubmit={onsubmit}
			className="flex flex-col items-center lg:items-start bg-white rounded-md p-9 custom-shadow w-full max-w-[548px]"
		>
			<p className="mb-7 text-center text-2xl lg:text-[28px] leading-[129%]">
				Заявка на звонок
			</p>
			<input
				className="mb-4 lg:mb-5 border border-[#e0e0e0] py-2.5 px-4 w-full h-11 rounded-sm font-montserrat font-medium text-base leading-[150%] placeholder:opacity-40 placeholder:text-[#272835]"
				placeholder="Имя"
			/>
			<input
				className="mb-4 lg:mb-5 border border-[#e0e0e0] py-2.5 px-4 w-full h-11 rounded-sm font-montserrat font-medium text-base leading-[150%] placeholder:opacity-40 placeholder:text-[#272835]"
				placeholder="Услуга"
			/>
			<input className="border border-[#e0e0e0] py-2.5 px-4 w-full h-11 rounded-sm font-montserrat font-medium text-base leading-[150%] placeholder:opacity-40 placeholder:text-[#272835]" />
			<button
				className="mt-7 rounded-[4px] bg-(--primary-color) h-12 w-full max-w-75 flex justify-center items-center font-montserrat font-semibold text-base leading-[125%] text-(--font-hover-color) tracking-[-0.01em]"
				type="submit"
			>
				Отправить
			</button>
		</form>
	);
}
