import Image from "next/image";
import { Title } from "../ui/title";

export function AboutTypography() {
	return (
		<div id="about-typography" className="flex flex-col items-center w-full pt-10 px-3.75 pb-9.5">
			<Title title="О типографии" />

			<p className="w-full max-w-[345px] mt-4 text-center text-xl leading-[129%]">
				А3 ПРИНТ — надежная типография в Алматы.
				<br />
				<span className="text-(--font-blue-color)">И это не просто слова!</span>
			</p>

			<div className="flex flex-col items-center w-full mt-15 gap-6">
				<div className="flex flex-col items-center">
					<div className="relative w-12 h-9 flex items-end">
						<div className="bg-(--primary-color) rounded-[4px] w-12 h-4.75" />
						<Image
							src="/calendar-clock.svg"
							alt="calendar-clock"
							width={80}
							height={75}
							className="w-9.6 h-9 absolute m-auto"
						/>
					</div>

					<div className="bg-(--primary-color) h-0.5 w-50 rounded-xs mt-4 mb-3" />

					<p className="max-w-[343px] text-center text-xs font-medium leading-[140%] font-montserrat">
						Когда-то мы были рекламным агентством, <br />а сегодня это
						полиграфический центр со своим технопарком на 16+ единиц
						оборудования и команда, которая знает всё о печати. Мы следим за
						трендами в полиграфии и каждые полгода обновляем оборудование и
						внедряем новые технологии — потому что для нас важно, чтобы{" "}
						<span className="text-center text-xs leading-[140%] font-semibold text-(--font-blue-color) font-montserrat">
							результат радовал и наших клиентов, и клиентов наших клиентов
						</span>
					</p>
				</div>

				<Image
					src="/side-view-woman-with-color-palette.jpg"
					alt="side-view-woman-with-color-palette"
					width={345}
					height={236}
					className="rounded-md"
				/>

				<div className="flex flex-col items-center">
					<div className="relative w-12 h-9 flex items-end">
						<div className="bg-(--primary-color) rounded-[4px] w-12 h-4.75" />
						<Image
							src="/shield-check.svg"
							alt="shield-check"
							width={80}
							height={72}
							className="w-9.6 h-9 absolute m-auto"
						/>
					</div>
					<div className="bg-(--primary-color) h-0.5 w-50 rounded-xs mt-4 mb-3" />
					<p className="max-w-[345px] text-center text-xs font-medium leading-[140%] font-montserrat">
						За 17 лет в рекламно-печатном бизнесе мы научились не просто
						“печатать по ТЗ”, а{" "}
						<span className="text-center text-xs leading-[140%] font-semibold text-(--font-blue-color) font-montserrat">
							глубоко разбираться в задачах бизнеса.
						</span>{" "}
						Предлагаем решения, которые экономят время, деньги и нервы — и
						доставляем заказы вовремя прямо к вам в руки. Нам доверяют заказы
						любой сложности: от фото <br />
						на холсте в подарок самым близким людям <br />
						до архитектурных проектов, оформления витрин <br />и изготовления
						наружных вывесок. И независимо <br />
						от стоимости и тиража, вы можете рассчитывать <br />
						на то, что{" "}
						<span className="text-center text-xs leading-[140%] font-semibold text-(--font-blue-color) font-montserrat">
							каждый заказ в А3 ПРИНТ будет выполнен безупречно
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}
