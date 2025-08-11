import { FAQAccordion } from "../ui/faq-accordion";
import { Title } from "../ui/title";

export function FAQ() {
	return (
		<div className="flex flex-col items-center gap-10 md:gap-12 lg:gap-17.5 pt-10 md:py-15 lg:py-20 pb-13 px-3.75 w-full">
			<Title title="Вопросы & Ответы" w="w-60 md:w-70 lg:w-full" />
			<div className="w-full">
				<FAQAccordion />
			</div>
		</div>
	);
}
