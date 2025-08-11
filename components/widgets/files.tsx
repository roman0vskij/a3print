import Image from "next/image";

function Button() {
	return (
		<button className="bg-(--primary-color) rounded-[4px] py-4 px-7 w-50 h-12 lg:h-13 font-montserrat font-semibold text-base leading-[125%] text-(--font-hover-color) flex justify-center items-center tracking-[-0.01em]">
			Скачать
		</button>
	);
}

export function Files() {
	return (
		<div className="flex flex-col md:flex-row items-center pt-11.25 pb-12 md:py-13 lg:py-17.5 md:gap-10 lg:gap-28.25 lg:px-5">
			<div className="flex flex-col items-center">
				<Image
					src="/file.svg"
					alt="file img"
					width={150}
					height={150}
					className="size-20 lg:size-37.5"
				/>
				<h4 className="font-medium text-2xl md:text-3xl lg:text-[40px] leading-[120%] lg:leading-[129%] text-center max-w-55 md:max-w-70 lg:max-w-90 mt-5 md:mt-6 lg:mt-7.5 mb-3 md:mb-4 lg:mb-5">
					Какие файлы принимаем для печати
				</h4>
				<p className="font-montserrat font-medium text-xs md:text-sm lg:text-base leading-[140%] text-center max-w-60 md:max-w-70 lg:max-w-110 mb-5 md:mb-7 lg:mb-9">
					Макеты должны соответствовать техническим характеристикам. Скачайте
					PDF с подробными инструкциями, чтобы избежать ошибок при печати
				</p>
				<Button />
			</div>

			<div className="bg-(--primary-color) h-0.5 md:h-98 lg:h-127.5 w-60 md:w-0.5 rounded-xs mt-8.75 mb-6.25" />

			<div className="flex flex-col items-center">
				<Image
					src="/pig.svg"
					alt="pig img"
					width={150}
					height={150}
					className="size-20 lg:size-37.5"
				/>
				<h4 className="font-medium text-2xl md:text-3xl lg:text-[40px] leading-[120%] lg:leading-[129%] text-center max-w-55 md:max-w-70 lg:max-w-90 mt-5 md:mt-6 lg:mt-7.5 mb-3 md:mb-4 lg:mb-5">
					Базовая стоимость услуг
				</h4>
				<p className="font-montserrat font-medium text-xs md:text-sm lg:text-base leading-[140%] text-center max-w-68 md:max-w-70 lg:max-w-110 mb-5 md:mb-7 lg:mb-9">
					Цена рассчитывается индивидуально под каждый проект. Скачайте
					прайс-лист типографии и узнайте ориентировочные цены на популярные
					услуги
				</p>
				<Button />
			</div>
		</div>
	);
}
