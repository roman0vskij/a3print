import Image from "next/image";

function Button() {
	return (
		<button className="bg-(--primary-color) rounded-[4px] py-4 px-7 w-50 h-12 font-montserrat font-semibold text-base leading-[125%] text-(--font-hover-color) flex justify-center items-center tracking-[-0.01em]">
			Скачать
		</button>
	);
}

export function Files() {
	return (
		<div className="flex flex-col items-center pt-11.25 pb-12">
			<div className="flex flex-col items-center">
				<Image
					src="/file.svg"
					alt="file img"
					width={150}
					height={150}
					className="size-20"
				/>
				<h4 className="font-medium text-2xl leading-[120%] text-center max-w-55 mt-5 mb-3">
					Какие файлы принимаем для печати
				</h4>
				<p className="font-montserrat font-medium text-xs leading-[140%] text-center max-w-60 mb-5">
					Макеты должны соотвествовать техническим характеристикам. Скачайте,
					чтобы узнать подробнее
				</p>
				<Button />
			</div>

			<div className="bg-(--primary-color) h-0.5 w-60 rounded-xs mt-8.75 mb-6.25" />

			<div className="flex flex-col items-center">
				<Image
					src="/pig.svg"
					alt="pig img"
					width={150}
					height={150}
					className="size-20"
				/>
				<h4 className="font-medium text-2xl leading-[120%] text-center max-w-55 mt-5 mb-3">
					Ознакомиться с базовой стоимостью
				</h4>
				<p className="font-montserrat font-medium text-xs leading-[140%] text-center max-w-68 mb-5">
					Цена рассчитывается индивидуально, Менеджер подберет наилучшие
					условия, исходя из вашего запроса
				</p>
				<Button />
			</div>
		</div>
	);
}
