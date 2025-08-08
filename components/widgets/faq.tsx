import { FAQAccordion } from "../ui/faq-accordion";
import { Title } from "../ui/title";

export function FAQ() {
	return (
		<div className="flex flex-col items-center gap-10 pt-10 pb-13 px-3.75 w-full">
			<Title title="Вопросы & Ответы" w="w-[210px]" />
			<div className="w-full">
				<FAQAccordion />
			</div>
		</div>
	);
}
