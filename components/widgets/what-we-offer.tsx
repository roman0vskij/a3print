import { OffersAccordion } from "../ui/offers-accordion";
import { OffersTabs } from "../ui/offers-tabs";

export function WhatWeOffer() {
	return (
		<div
			id="what-we-offer"
			className="mt-12 lg:mt-30.75 pt-10 w-full max-w-[1440px] flex flex-col items-center"
		>
			<h2 className="max-w-110 md:max-w-200 lg:max-w-300 h-full mx-auto px-8.25 text-center text-[32px] md:text-5xl lg:text-6xl font-medium leading-[122%] lg:leading-[129%]">
				Что можно
				<br className="md:hidden" /> заказать
				<br />в нашей типографии?
			</h2>
			<p className="max-w-80 md:max-w-170 lg:max-w-230 h-full mt-7 md:mt-6 lg:mt-5 mx-auto text-center text-xs md:text-sm lg:text-lg font-medium leading-[140%] font-montserrat">
				Вам нужно заказать печать на одежде, <br className="md:hidden" />
				полиграфию для свадьбы <br className="hidden md:block" /> или{" "}
				<br className="md:hidden" />
				брендированные сувениры для бизнеса? <br className="md:hidden" />
				Нам вы можете доверить что угодно: <br />
				от офсетной и цифровой печати до <br className="md:hidden" />
				широкоформатной печати баннеров и оклейки авто. Оказываем
				полиграфические услуги под ключ — дизайн, печать, доставка и монтаж
			</p>

			<div className="mt-12 md:mt-14 lg:mt-17 mb-14.75 md:mb-13 lg:mb-12.5 px-3.75 w-full">
				<OffersTabs />
				<OffersAccordion />
			</div>
		</div>
	);
}
