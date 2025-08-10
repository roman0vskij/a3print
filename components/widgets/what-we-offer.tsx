export function WhatWeOffer() {
  return (
    <div id="what-we-offer" className="mt-12 lg:mt-30.75 pt-10">
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

      <div className="mt-12 md:mt-14 lg:mt-17 mb-14.75 md:mb-13 lg:mb-12.5 px-3.75 text-center">
        Accordion
      </div>
      {/* <Accordion
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
			</Accordion> */}
    </div>
  );
}
