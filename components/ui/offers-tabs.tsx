import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const tabs = [
	{
		id: "1",
		value: "Офсетная и цифровая печать",
	},
	{
		id: "2",
		value: "Рекламная продукция и широкоформатная печать",
	},
	{
		id: "3",
		value: "Сувенирная продукция",
	},
	{
		id: "4",
		value: "Дизайн и предпечатная подготовка",
	},
	{
		id: "5",
		value: "Упаковка и упаковочные материалы",
	},
];

export function OffersTabs() {
	return (
		<Tabs
			orientation="vertical"
			defaultValue={tabs[1].value}
			className="max-lg:hidden w-full flex items-start justify-center max-w-282 mx-auto"
		>
			<TabsList className="flex flex-col gap-4 py-5 bg-background w-full">
				{tabs.map((tab) => (
					<TabsTrigger
						key={tab.value}
						value={tab.value}
						className="flex items-center w-full data-[state=active]:rounded-l-[8px] p-5 gap-8 data-[state=active]:bg-(--primary-color)"
					>
						<Image
							src={`/offers/${tab.id}.jpg`}
							alt={tab.value}
							height={100}
							width={220}
							className="w-55 h-25 rounded-[4px] grow-0 shrink-0"
						/>
						<p className="text-start font-medium text-xl leading-[125%] w-full max-w-72 h-fit">
							{tab.value}
						</p>
					</TabsTrigger>
				))}
			</TabsList>

			<div className="min-h-201 h-fit flex flex-col items-center gap-4.75 min-w-108 px-9 py-10 rounded-[8px] custom-shadow">
				{tabs.map((tab) => (
					<TabsContent
						key={tab.value}
						value={tab.value}
						className="flex items-center w-full font-montserrat leading-[150%] font-medium hover:bg-[#fffadb] hover:[&>svg]:block rounded-[4px] px-3 py-2.5"
					>
						<p className="w-full font-montserrat leading-[150%] font-medium">
							{tab.id} Оклейка транспорта
						</p>
						<ChevronRight className="hidden size-5" />
					</TabsContent>
				))}
			</div>
		</Tabs>
	);
}
