import { AboutTypography } from "@/components/widgets/about-typography";
import { Contacts } from "@/components/widgets/contacts";
import { FAQ } from "@/components/widgets/faq";
import { Files } from "@/components/widgets/files";
import { Footer } from "@/components/widgets/footer";
import { Header } from "@/components/widgets/header";
import { Maps } from "@/components/widgets/maps";
import { NotFoundOffer } from "@/components/widgets/not-founde-offer";
import { Portfolio } from "@/components/widgets/portfolio";
import { Reviews } from "@/components/widgets/reviews";
import { StagesOfWork } from "@/components/widgets/stages-of-work";
import { TypographyFullCycle } from "@/components/widgets/typography-full-cycle";
import { WhatWeOffer } from "@/components/widgets/what-we-offer";
import { WhyWe } from "@/components/widgets/why-we";

export default function HomePage() {
	return (
		<div className="flex flex-col items-center">
			<Header />

			<TypographyFullCycle />

			<WhatWeOffer />

			<NotFoundOffer />

			<AboutTypography />

			<Portfolio />

			<WhyWe />

			<StagesOfWork />

			<Files />

			<FAQ />

			<Maps />

			<Reviews />

			<Contacts />

			<Footer />
		</div>
	);
}
