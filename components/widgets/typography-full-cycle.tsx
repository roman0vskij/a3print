import Image from "next/image";

export function TypographyFullCycle() {
	return (
		<div className="relative overflow-x-hidden">
			<h1 className="w-full h-full mt-28 pl-11.75 pr-11.5 text-center text-4xl font-medium leading-[122%]">
				Типография полного цикла
				<br />в Алматы
			</h1>
			<p className="w-full h-full mt-7 pl-18.5 pr-18 text-center text-sm font-medium leading-[140%] font-montserrat">
				Печать визиток, баннеров, календарей и другой полиграфической продукции
				с доставкой по Алматы и Казахстану
			</p>
			<button className="flex justify-center items-center bg-(--primary-color) rounded-sm mx-auto mt-9 px-5 py-4 h-12 w-65 font-montserrat font-semibold text-base leading-[125%] tracking-[-0.01em] text-(--font-secondary-color)">
				Заказать печать сейчас
			</button>

			<div className="flex justify-center items-center flex-wrap mx-auto mt-13 gap-5.75 w-71.5 h-21.75">
				<Image
					src="/companies/company4.jpg"
					alt="2GIS"
					width={94.46}
					height={30}
					className="w-17.5 h-5.5"
				/>
				<Image
					src="/companies/company5.jpg"
					alt="inDrive"
					width={105.1}
					height={30}
					className="w-19.5 h-5.5"
				/>
				<Image
					src="/companies/company6.jpg"
					alt="КакТебе"
					width={110.21}
					height={35}
					className="w-20.5 h-6.5"
				/>
				<Image
					src="/companies/company1.jpg"
					alt="акимат"
					width={50}
					height={50}
					className="size-9.25"
				/>
				<Image
					src="/companies/company2.jpg"
					alt="kingfisher"
					width={98.92}
					height={35}
					className="w-18.25 h-6.5"
				/>
				<Image
					src="/companies/company3.jpg"
					alt="NINO"
					width={86.7}
					height={30}
					className="w-16 h-5.5"
				/>
				<Image
					src="/companies/company7.jpg"
					alt="Coffee BOOM"
					width={55.89}
					height={50}
					className="w-10.25 h-9.25"
				/>
			</div>

			<div className="absolute top-[-136px] left-1/2 translate-x-[-50%] size-60 animate-pulse bg-[url(/yellow-bg.svg)] bg-contain" />
			<div className="absolute top-14.5 right-0 translate-x-[50%] size-60.75 animate-pulse bg-[url(/pink-bg.svg)] bg-contain" />
			<div className="absolute top-27.5 translate-x-[-50%] size-61.5 animate-pulse bg-[url(/blue-bg.svg)] bg-contain" />
		</div>
	);
}
