import EmblaCarousel from "../ui/portfolio-carousel/carousel";
import { Title } from "../ui/title";

export function Portfolio() {
	return (
		<div id="portfolio" className="pt-10 pb-15">
			<Title title="Портфолио" />

			<p className="text-center text-xs font-medium leading-[140%] font-montserrat mt-2 px-7.5">
				Более 10.000 выполненных заказов и довольных клиентов. Ваш проект может
				быть следующим!
			</p>
			<div className="mt-10 max-w-100%">
				<EmblaCarousel
					slides={[
						{ src: "/carousel/2.jpg", alt: "Футболка FBSM" },
						{ src: "/carousel/3.jpg", alt: "Салон красоты GIARDINO" },
						{ src: "/carousel/1.jpg", alt: "Фотообои и фрески" },
					]}
				/>
			</div>
		</div>
	);
}
