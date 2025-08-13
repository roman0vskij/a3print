import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const items = [
	{
		id: "1",
		value: "Офсетная и цифровая печать",
		links: ["Баннеры", "Входные группы", "link-link3"],
	},
	{
		id: "2",
		value: "Рекламная продукция и широкоформатная печать",
		links: ["Баннеры", "linkaa li la link2", "Входные группы"],
	},
	{
		id: "3",
		value: "Сувенирная продукция",
		links: ["Баннеры", "Входные группы", "link-link3"],
	},
	{
		id: "4",
		value: "Дизайн и предпечатная подготовка",
		links: ["Баннеры", "linkaa li la link2", "link-link3"],
	},
	{
		id: "5",
		value: "Упаковка и упаковочные материалы",
		links: ["Баннеры", "linkaa li la link2", "link-link3"],
	},
];

export function OffersAccordion() {
	return (
		<Accordion
			type="single"
			collapsible
			defaultValue="item-2"
			className="lg:hidden max-w-[345px] md:max-w-[500px] w-full flex flex-col md:flex-row md:flex-wrap gap-3 items-center mx-auto"
		>
			{items.map(({ id, value, links }) => (
				<AccordionItem
					key={`accordion-item-${id}`}
					value={`item-${id}`}
					className="[&>div]:rounded-b-[8px] w-full max-w-108 rounded-xl min-h-[68px] [&>[data-state='open']~div]:shadow-lg"
				>
					<AccordionTrigger className="rounded-none [&[data-state=open]]:rounded-t-[8px] w-full p-4 flex justify-between items-center [&>div]:hidden [&[data-state=open]]:bg-(--primary-color)">
						<p className="font-medium text-xs md:text-sm leading-[125%]">
							{value}
						</p>
						<Image
							src={`/offers/${id}.jpg`}
							alt={value}
							height={100}
							width={220}
							className="w-30 h-13.75 rounded-[4px] grow-0 shrink-0"
						/>
					</AccordionTrigger>
					<AccordionContent className="w-full px-3 py-4 flex flex-wrap gap-3 rounded-b-[8px]">
						{links.map((link) => (
							<div
								key={id + link}
								className="bg-[#fffadb] cursor-pointer flex items-center gap-1 rounded-[4px] pl-2 py-1 pr-1"
							>
								<p className="font-montserrat leading-[150%] font-medium text-xs md:text-sm">
									{link}
								</p>
								<ChevronRight className="size-3" />
							</div>
						))}
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
