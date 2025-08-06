import { Title } from "../ui/title";
import Image from "next/image";

export function WhyWe() {
	return (
		<div className="pt-10 pb-23.75 px-3.75 flex flex-col items-center">
			<Title title="Почему мы?" />
			<p className="w-full max-w-[345px] mt-3 text-center text-[15px] leading-[140%]">
				<span className="text-(--font-blue-color)">
					Скорость, качество, сервис
				</span>{" "}
				— три кита, на которых стоит А3 ПРИНТ
			</p>
			<div className="mt-12 flex flex-col items-center">
				<div className="flex flex-col items-center gap-3">
					<div className="bg-(--primary-color)/10 flex justify-between gap-1.5 p-3 w-62 h-16 rounded-[4px]">
						<Image
							src="/lightning.svg"
							alt="lightning"
							width={90}
							height={90}
							className="w-10 h-10"
						/>
						<Image
							src="/lightning.svg"
							alt="lightning"
							width={90}
							height={90}
							className="w-10 h-10 opacity-75"
						/>
						<Image
							src="/lightning.svg"
							alt="lightning"
							width={90}
							height={90}
							className="w-10 h-10 opacity-55"
						/>
						<Image
							src="/lightning.svg"
							alt="lightning"
							width={90}
							height={90}
							className="w-10 h-10 opacity-35"
						/>
						<Image
							src="/lightning.svg"
							alt="lightning"
							width={90}
							height={90}
							className="w-10 h-10 opacity-20"
						/>
					</div>
					<p className="text-center text-xs font-medium leading-[150%] font-montserrat">
						<span className="text-(--font-blue-color) font-semibold font-montserrat">
							Свой технопарк
						</span>{" "}
						позволяет нам обеспечивать{" "}
						<span className="text-(--font-blue-color) font-semibold font-montserrat">
							высокое качество печати
						</span>
						, работать с любыми тиражами, предлагать{" "}
						<span className="text-(--font-blue-color) font-semibold font-montserrat">
							срочную печать
						</span>{" "}
						и отдавать оперативные заказы{" "}
						<span className="text-(--font-blue-color) font-semibold font-montserrat">
							в течение 24 часов
						</span>
						. Мы ценим время наших клиентов, поэтому вы можете сделать{" "}
						<span className="text-(--font-blue-color) font-semibold font-montserrat">
							онлайн-заказ
						</span>{" "}
						и получить готовую продукцию с доставкой — не выходя из дома или
						офиса
					</p>
				</div>

				<div className="bg-(--primary-color) h-0.5 w-37.5 rounded-xs my-7" />

				<div className="flex flex-col items-center gap-3">
					<div className="bg-(--primary-color)/10 flex justify-between gap-1.5 p-3 w-62 h-16 rounded-[4px]">
						<Image
							src="/badge-check.svg"
							alt="badge-check"
							width={90}
							height={90}
							className="w-10 h-10"
						/>
						<Image
							src="/badge-check.svg"
							alt="badge-check"
							width={90}
							height={90}
							className="w-10 h-10 opacity-75"
						/>
						<Image
							src="/badge-check.svg"
							alt="badge-check"
							width={90}
							height={90}
							className="w-10 h-10 opacity-55"
						/>
						<Image
							src="/badge-check.svg"
							alt="badge-check"
							width={90}
							height={90}
							className="w-10 h-10 opacity-35"
						/>
						<Image
							src="/badge-check.svg"
							alt="badge-check"
							width={90}
							height={90}
							className="w-10 h-10 opacity-20"
						/>
					</div>
					<p className="w-[330.3px] text-center text-xs font-medium leading-[150%] font-montserrat">
						За каждым проектом стоит{" "}
						<span className="text-(--font-blue-color) font-semibold font-montserrat">
							команда специалистов с опытом более 5 лет
						</span>
						. Графические дизайнеры, печатники, постпечатники и менеджеры —
						каждый следит за своим этапом, чтобы результат полиграфии был
						безупречным. А с вами на связи{" "}
						<span className="text-(--font-blue-color) font-semibold font-montserrat">
							личный менеджер
						</span>
						, который сопровождает заказ от макета до доставки
					</p>
				</div>
			</div>
			<div className="flex flex-col items-center gap-6 mt-12 bg-(--primary-color) py-6 px-3 rounded-md">
				<Image
					src="/big-check.svg"
					alt="Мы классные"
					width={182}
					height={182}
					className="size-20"
				/>
				<div className="flex flex-col items-center">
					<p className="w-[310px] text-center text-[15px] leading-[140%]">
						Мы работаем по выгодным ценам и предлагаем постоплату при заключении
						договора
					</p>
					<p className="w-[300px] mt-2 text-center text-xs font-medium leading-[150%] font-montserrat">
						С нами печать — это просто: вы заказываете, мы делаем всё остальное
					</p>
				</div>
			</div>
		</div>
	);
}
