//import Image from "next/image";

import { Title } from "@/components/ui/title";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "@radix-ui/react-accordion";

export default function Home() {
	return (
		<div className="flex flex-col items-center">
			<div>
				<h1 className="w-full h-full mt-17 pl-11.75 pr-11.5 text-center text-4xl font-medium leading-[122%]">
					Типография полного цикла
					<br />в Алматы
				</h1>
				<p className="w-full h-full mt-7 pl-18.5 pr-18 text-center text-sm font-medium leading-[140%] font-montserrat">
					Печать визиток, баннеров, календарей и другой полиграфической
					продукции с доставкой по Алматы и Казахстану
				</p>
				<button className="flex justify-center items-center bg-(--primary-color) rounded-sm mx-auto mt-9 px-5 py-4 h-12 w-65 font-montserrat font-semibold text-base leading-[125%] tracking-[-0.01em] text-(--font-secondary-color)">
					Заказать печать сейчас
				</button>
				<div className="text-center text-3xl mt-13 h-21.5">companies</div>
			</div>

			<div className="mt-12">
				<h2 className="w-full h-full mt-10 px-8.25 text-center text-[32px] font-medium leading-[122%]">
					Что можно
					<br />
					заказать
					<br />в нашей типографии?
				</h2>
				<p className="w-full h-full mt-7 px-8.25 text-center text-xs font-medium leading-[140%] font-montserrat">
					Вам нужно заказать печать на одежде,
					<br />
					полиграфию для свадьбы или
					<br />
					брендированные сувениры для бизнеса?
					<br />
					Нам вы можете доверить что угодно:
					<br />
					от офсетной и цифровой печати до
					<br />
					широкоформатной печати баннеров и оклейки авто. Оказываем
					полиграфические услуги под ключ — дизайн, печать, доставка и монтаж
				</p>
				<div className="mt-12 mb-14.75 px-3.75 text-center">Accordion</div>
			</div>

			<div className="w-full bg-(--primary-color) px-3.75 pb-12.5 pt-12 flex flex-col items-center gap-7.5">
				<div>Img</div>
				<div className="flex flex-col gap-6 w-full">
					<h3 className="w-full text-center text-4xl font-medium leading-[129%] text-(--font-secondary-color)">
						Не нашли нужную продукцию?
					</h3>
					<div>
						<p className="text-center text-sm font-medium leading-[150%] font-montserrat text-(--font-secondary-color)">
							Если вы не нашли нужный вариант на сайте, мы всегда готовы
							обсудить ваш проект и предложить индивидуальное решение
						</p>
						<p className="text-center text-sm font-medium leading-[150%] font-montserrat text-(--font-secondary-color) mt-1.5">
							Свяжитесь с нами или оставьте заявку — вместе найдём лучшее
							решение
						</p>
					</div>
					<div className="flex flex-col gap-3">
						<button className="flex justify-center items-center bg-(--font-secondary-color) rounded-sm mx-auto px-5 py-4 h-12 w-86.25 font-montserrat font-semibold text-base leading-[125%] tracking-[-0.01em] text-white">
							Рассчитать заказ
						</button>
						<button className="border-2 border-(--font-secondary-color) flex justify-center items-center  rounded-sm mx-auto px-5 py-4 h-12 w-86.25 font-montserrat font-semibold text-base leading-[125%] tracking-[-0.01em] text-(--font-secondary-color)">
							Задать вопрос
						</button>
					</div>
				</div>
			</div>

			<div className="flex flex-col w-full pt-10 px-3.75 pb-9.5">
				<Title title="О типографии" />

				<p className="w-full mt-4 text-center text-xl leading-[129%]">
					А3 ПРИНТ — надежная типография в Алматы.
					<br />
					<span className="text-(--font-blue-color)">
						И это не просто слова!
					</span>
				</p>
				<div className="flex flex-col w-full mt-15">
					<div className="flex flex-col">
						<div>img</div>
						<p className="text-center text-xs font-medium leading-[140%] font-montserrat">
							Когда-то мы были рекламным агентством, а сегодня это
							полиграфический центр со своим технопарком на 16+ единиц
							оборудования и команда, которая знает всё о печати. Мы следим за
							трендами в полиграфии и каждые полгода обновляем оборудование и
							внедряем новые технологии — потому что для нас важно, чтобы{" "}
							<span className="text-center text-xs leading-[140%] font-semibold text-(--font-blue-color) font-montserrat">
								результат радовал и наших клиентов, и клиентов наших клиентов
							</span>
						</p>
					</div>
					<div>img</div>
					<div className="flex flex-col">
						<div>img</div>
						<p className="text-center text-xs font-medium leading-[140%] font-montserrat">
							За 17 лет в рекламно-печатном бизнесе мы научились не просто
							“печатать по ТЗ”, а{" "}
							<span className="text-center text-xs leading-[140%] font-semibold text-(--font-blue-color) font-montserrat">
								глубоко разбираться в задачах бизнеса.
							</span>{" "}
							Предлагаем решения, которые экономят время, деньги и нервы — и
							доставляем заказы вовремя прямо к вам в руки. Нам доверяют заказы
							любой сложности: от фото на холсте в подарок самым близким людям
							до архитектурных проектов, оформления витрин и изготовления
							наружных вывесок. И независимо от стоимости и тиража, вы можете
							рассчитыватьна то, что{" "}
							<span className="text-center text-xs leading-[140%] font-semibold text-(--font-blue-color) font-montserrat">
								каждый заказ в А3 ПРИНТ будет выполнен безупречно
							</span>
						</p>
					</div>
				</div>
			</div>

			<div className="pt-10 pb-15">
				<Title title="Портфолио" />

				<p className="text-center text-xs font-medium leading-[140%] font-montserrat mt-2 px-7.5">
					Более 10.000 выполненных заказов и довольных клиентов. Ваш проект
					может быть следующим!
				</p>
				<div className="mt-10">slider</div>
			</div>

			<div className="pt-10 pb-23.75 px-3.75">
				<Title title="Почему мы?" />
				<p className="w-full mt-3 text-center text-[15px] leading-[140%]">
					<span className="text-(--font-blue-color)">
						Скорость, качество, сервис
					</span>{" "}
					— три кита, на которых стоит А3 ПРИНТ
				</p>
				<div>
					<div>
						<div className="text-center">img</div>
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
					<div className="flex flex-col items-center">
						<div className="text-center">img</div>
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
					<div className="text-center size-20">img</div>
					<div className="flex flex-col items-center">
						<p className="w-[310px] text-center text-[15px] leading-[140%]">
							Мы работаем по выгодным ценам и предлагаем постоплату при
							заключении договора
						</p>
						<p className="w-[300px] mt-2 text-center text-xs font-medium leading-[150%] font-montserrat">
							С нами печать — это просто: вы заказываете, мы делаем всё
							остальное
						</p>
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center px-3.75 py-10">
				<Title title="Этапы работ" />
				<p className="w-70 mt-3 text-center text-[15px] leading-[140%]">
					<span className="text-(--font-blue-color)">6 шагов</span> — от заявки
					до готового результата
				</p>
				<div className="flex flex-col items-center mt-12"></div>
			</div>

			<div className="flex flex-col items-center pt-11.25 pb-12">
				<div className="flex flex-col items-center">
					<div>img</div>
					<p>text</p>
				</div>
				<div className="flex flex-col items-center">
					<div>img</div>
					<p>text</p>
				</div>
			</div>

			<div className="flex flex-col items-center gap-10 pt-10 pb-13 px-3.75">
				<Title title="Вопросы & Ответы" w="w-[210px]" />
			</div>

			<Accordion
				type="single"
				collapsible
				className="w-full"
				defaultValue="item-1"
			>
				<AccordionItem value="item-1">
					<AccordionTrigger className="bg-amber-300">
						Product Information
					</AccordionTrigger>
					<AccordionContent className="flex flex-col gap-4 text-balance">
						<p>
							Our flagship product combines cutting-edge technology with sleek
							design. Built with premium materials, it offers unparalleled
							performance and reliability.
						</p>
						<p>
							Key features include advanced processing capabilities, and an
							intuitive user interface designed for both beginners and experts.
						</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>Shipping Details</AccordionTrigger>
					<AccordionContent className="flex flex-col gap-4 text-balance">
						<p>
							We offer worldwide shipping through trusted courier partners.
							Standard delivery takes 3-5 business days, while express shipping
							ensures delivery within 1-2 business days.
						</p>
						<p>
							All orders are carefully packaged and fully insured. Track your
							shipment in real-time through our dedicated tracking portal.
						</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger>Return Policy</AccordionTrigger>
					<AccordionContent className="flex flex-col gap-4 text-balance">
						<p>
							We stand behind our products with a comprehensive 30-day return
							policy. If you&apos;re not completely satisfied, simply return the
							item in its original condition.
						</p>
						<p>
							Our hassle-free return process includes free return shipping and
							full refunds processed within 48 hours of receiving the returned
							item.
						</p>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}
