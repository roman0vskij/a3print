import { Title } from "../ui/title";
import EmblaCarousel from "@/components/ui/reviews-carousel/carousel";

export function Reviews() {
	const SLIDE_COUNT = 9;
	const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

	return (
		<div className="flex flex-col items-center pt-10 pb-17.75 w-full">
			<Title title="Отзывы" />
			<EmblaCarousel slides={SLIDES} />
		</div>
	);
}
