import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Fragment } from "react";

const items = [
	{
		title: "Где можно посмотреть цены?",
		content: "",
	},
	{
		title: "Делаете ли вы 1 экземпляр?",
		content: "",
	},
	{
		title: "Это AZ Принт?",
		content: "",
	},
	{
		title: "Делаете печать на футболках, флагах, табличках?",
		content: "",
	},
	{
		title: "Что такое УФ (UV) печать и она точно не сотрётся?",
		content: "",
	},
	{
		title: "Какой минимальный тираж на стикеры?",
		content: "",
	},
	{
		title: "Как подготовить файл к печати, если у нас свой дизайнер?",
		content:
			"Идеальный формат — PDF или TIFF в CMYK, с вылетами по 2–3 мм и шрифтами, переведёнными в кривые. Также принимаем макеты в AI, CDR, PSD.",
		subcontent: "Скачать инструкцию по подготовке макета (.pdf)",
	},
	{
		title: "А если у нас нет дизайна, вы можете сделать файл сами?",
		content: "",
	},
	{
		title: "Какие сроки выполнения заказов?",
		content: "",
	},
	{
		title: "Есть ли доставка, постоплата и работаете ли по субботам?",
		content: "",
	},
];

export function FAQAccordion() {
	return (
		<>
			<Accordion
				type="single"
				collapsible
				className="lg:hidden max-w-[345px] w-full flex flex-col md:flex-row md:flex-wrap gap-3 items-center mx-auto"
			>
				{items.map(({ title, content, subcontent }, index) => (
					<AccordionItem
						key={`accordion-item-${index}`}
						value={`item-${index}`}
						className="w-full max-w-108 rounded-xl p-4 custom-shadow min-h-[68px]"
					>
						<AccordionTrigger className="w-full font-medium text-sm md:text-base leading-[130%] font-montserrat p-0 flex items-center">
							{title}
						</AccordionTrigger>
						<AccordionContent className="w-full font-medium text-xs md:text-sm leading-[140%] font-montserrat">
							{subcontent ? (
								<>
									{content}{" "}
									<p className="mt-1 text-xs md:text-sm leading-[140%] font-montserrat font-semibold underline skip-ink text-(--font-blue-color)">
										{subcontent}
									</p>
								</>
							) : (
								content
							)}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>

			<Accordion
				type="single"
				collapsible
				className="max-lg:hidden max-w-[345px] lg:max-w-224 w-full flex gap-8 mx-auto"
			>
				<div className="flex flex-col gap-6">
					{items.map(({ title, content, subcontent }, index) =>
						index % 2 === 0 ? (
							<AccordionItem
								key={`accordion-item-${index}`}
								value={`item-${index}`}
								className="w-full max-w-108 rounded-xl p-4 lg:p-5 custom-shadow min-h-22"
							>
								<AccordionTrigger className="w-full font-medium text-lg leading-[140%] font-montserrat p-0 flex items-center">
									{title}
								</AccordionTrigger>
								<AccordionContent className="w-full font-medium text-base leading-[140%] font-montserrat">
									{subcontent ? (
										<>
											{content}{" "}
											<p className="mt-1 text-base leading-[140%] font-montserrat font-semibold underline skip-ink text-(--font-blue-color)">
												{subcontent}
											</p>
										</>
									) : (
										content
									)}
								</AccordionContent>
							</AccordionItem>
						) : (
							<Fragment key={`fragment${index}`} />
						)
					)}
				</div>

				<div className="flex flex-col gap-6">
					{items.map(({ title, content, subcontent }, index) =>
						index % 2 !== 0 ? (
							<AccordionItem
								key={`accordion-item-${index}`}
								value={`item-${index}`}
								className="w-full max-w-108 rounded-xl p-4 lg:p-5 custom-shadow min-h-22"
							>
								<AccordionTrigger className="w-full font-medium text-lg leading-[140%] font-montserrat p-0 flex items-center">
									{title}
								</AccordionTrigger>
								<AccordionContent className="w-full font-medium text-base leading-[140%] font-montserrat">
									{subcontent ? (
										<>
											{content}{" "}
											<p className="mt-1 text-base leading-[140%] font-montserrat font-semibold underline skip-ink text-(--font-blue-color)">
												{subcontent}
											</p>
										</>
									) : (
										content
									)}
								</AccordionContent>
							</AccordionItem>
						) : (
							<Fragment key={`fragment${index}`} />
						)
					)}
				</div>
			</Accordion>
		</>
	);
}
