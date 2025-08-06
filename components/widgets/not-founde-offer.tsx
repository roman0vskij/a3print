import Image from "next/image";

export function NotFoundOffer() {
	return (
		<div className="w-full bg-(--primary-color) px-3.75 pb-12.5 pt-12 flex flex-col items-center gap-7.5">
			<Image
				src="/no-file.svg"
				alt="Не нашли услугу?"
				width={326.71}
				height={415.82}
				className="w-25"
			/>
			<div className="flex flex-col gap-6 w-full">
				<h3 className="w-full text-center text-4xl font-medium leading-[129%] text-(--font-secondary-color)">
					Не нашли нужную продукцию?
				</h3>
				<div>
					<p className="text-center text-sm font-medium leading-[150%] font-montserrat text-(--font-secondary-color)">
						Если вы не нашли нужный вариант на сайте, мы всегда готовы обсудить
						ваш проект и предложить индивидуальное решение
					</p>
					<p className="text-center text-sm font-medium leading-[150%] font-montserrat text-(--font-secondary-color) mt-1.5">
						Свяжитесь с нами или оставьте заявку — вместе найдём лучшее решение
					</p>
				</div>
				<div className="flex flex-col gap-3">
					<button className="flex justify-center items-center bg-(--font-secondary-color) rounded-[4px] mx-auto px-5 py-4 h-12 w-86.25 font-montserrat font-semibold text-base leading-[125%] tracking-[-0.01em] text-white">
						Рассчитать заказ
					</button>
					<button className="border-2 border-(--font-secondary-color) flex justify-center items-center  rounded-[4px] mx-auto px-5 py-4 h-12 w-86.25 font-montserrat font-semibold text-base leading-[125%] tracking-[-0.01em] text-(--font-secondary-color)">
						Задать вопрос
					</button>
				</div>
			</div>
		</div>
	);
}
