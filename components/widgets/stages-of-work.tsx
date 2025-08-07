import Image from "next/image";
import { Title } from "../ui/title";
import { cn } from "@/lib/utils";

type TStage = {
	img: {
		src: string;
		alt: string;
	};
	title: string;
	subtext?: string;
};

type TProps = {
	props: TStage;
	i: number;
	children: React.ReactNode;
};

function StageOfWork({ props, i, children }: TProps) {
	return (
		<div className="flex gap-4 z-1 max-w-[345px] w-full">
			<div
				className={cn(
					"flex justify-center items-center rounded-[4px] size-12 shrink-0",
					i === 0
						? "bg-[#fffce6]"
						: i === 1
						? "bg-[#fff0b7]"
						: i === 2
						? "bg-[#fee898]"
						: i === 3
						? "bg-[#fdd85a]"
						: i === 4
						? "bg-[#fccd2f]"
						: "bg-[#fbc40e]"
				)}
			>
				<Image
					src={props.img.src}
					alt={props.img.alt}
					width={36}
					height={36}
					className={cn(
						"size-8",
						i === 0
							? "opacity-60"
							: i === 1
							? "opacity-65"
							: i === 2
							? "opacity-75"
							: i === 3
							? "opacity-80"
							: i === 4
							? "opacity-90"
							: ""
					)}
				/>
			</div>
			<div className="flex flex-col gap-1">
				{props.subtext ? (
					<p className="font-semibold text-base leading-[150%] font-montserrat">
						{props.title}{" "}
						<span className="font-semibold text-base leading-[150%] font-montserrat text-[#b9b9b9]">
							{props.subtext}
						</span>
					</p>
				) : (
					<p className="font-semibold text-base leading-[150%] font-montserrat">
						{props.title}
					</p>
				)}
				{children}
			</div>
		</div>
	);
}

export function StagesOfWork() {
	const stages: TStage[] = [
		{
			img: {
				src: "/stages/stage1.svg",
				alt: "Заявка и консультация",
			},
			title: "1. Заявка и консультация",
		},
		{
			img: { src: "/stages/stage2.svg", alt: "Расчет стоимости" },
			title: "2. Расчет стоимости",
		},
		{
			img: {
				src: "/stages/stage3.svg",
				alt: "Дизайн и проверка макета",
			},
			title: "3. Дизайн и проверка макета",
		},
		{
			img: { src: "/stages/stage4.svg", alt: "Печать" },
			title: "4. Печать",
		},
		{
			img: {
				src: "/stages/stage5.svg",
				alt: "Выдача заказа и доставка",
			},
			title: "5. Выдача заказа и доставка",
		},
		{
			img: { src: "/stages/stage6.svg", alt: "Монтаж" },
			title: "6. Монтаж",
			subtext: "(по необходимости)",
		},
	];

	return (
		<div
			id="stages-of-work"
			className="relative flex flex-col items-center px-3.75 py-10"
		>
			<Title title="Этапы работ" />
			<p className="w-70 mt-3 text-center text-[15px] leading-[140%]">
				<span className="text-(--font-blue-color)">6 шагов</span> — от заявки
				<br />
				до готового результата
			</p>
			<div className="flex flex-col items-center mt-12 gap-7">
				<StageOfWork props={stages[0]} i={0} key={`stage1`}>
					<p className="font-medium text-[11px] leading-[150%] font-montserrat opacity-80 whitespace-pre-line">
						Оставьте заявку онлайн или позвоните — менеджер уточнит детали и
						подскажет лучшее решение под ваш запрос
					</p>
				</StageOfWork>
				<StageOfWork props={stages[1]} i={1} key={`stage2`}>
					<p className="font-medium text-[11px] leading-[150%] font-montserrat whitespace-pre-line">
						Мы быстро рассчитаем цену вашего заказа, учитывая тираж, материалы и
						сроки
					</p>
				</StageOfWork>
				<StageOfWork props={stages[2]} i={2} key={`stage3`}>
					<p className="font-medium text-[11px] leading-[150%] font-montserrat whitespace-pre-line">
						Наши дизайнеры разработают макет с нуля или проверят ваш файл на
						соответствие техническим требованиям.
						<br />
						<span className="text-[11px] leading-[150%] font-montserrat whitespace-pre-line font-semibold opacity-80">
							Важно! Тексты и грамматика не редактируются
						</span>{" "}
						— ответственность
						<br /> за финальное утверждение содержания
						<br />
						лежит на клиенте
					</p>
				</StageOfWork>
				<StageOfWork props={stages[3]} i={3} key={`stage4`}>
					<p className="font-medium text-[11px] leading-[150%] font-montserrat whitespace-pre-line">
						Цифровая, офсетная, широкоформатная —<br />
						под ваш проект. Постпечатная обработка: нанесение спецэффектов (лак,
						ламинация, голография и др.), а также сборка и упаковка
					</p>
				</StageOfWork>
				<StageOfWork props={stages[4]} i={4} key={`stage5`}>
					<p className="font-medium text-[11px] leading-[150%] font-montserrat whitespace-pre-line">
						Вы можете забрать готовую продукцию
						<br />в офисе или заказать доставку по Казахстану
					</p>
				</StageOfWork>
				<StageOfWork props={stages[5]} i={5} key={`stage6`}>
					<p className="font-medium text-[11px] leading-[150%] font-montserrat whitespace-pre-line">
						Для наружной рекламы, оклейки авто
						<br /> и широкоформатной печати наши
						<br />
						специалисты выполнят монтаж на объекте
					</p>
				</StageOfWork>
			</div>
			<div className="absolute left-9.5 top-58.5 w-0.5 h-136 bg-linear-to-b from-[#fff5cc] to-[#fbc40e]" />
		</div>
	);
}
