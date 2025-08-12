import Image from "next/image";
import { Logo } from "../ui/logo";
import React from "react";

type TProps = {
	children: React.ReactNode;
};

function Text({ children }: TProps) {
	return (
		<p className="max-w-30 w-full text-white font-montserrat font-light text-base leading-[129%]">
			{children}
		</p>
	);
}

export function Footer() {
	return (
		<footer className="bg-(--footer-color)">
			<div className="mx-auto relative flex flex-col items-center h-fit w-full max-w-[1440px]">
				<a
					className="bg-[url(/maps/map.png)] h-62.5 w-full md:absolute md:right-10 md:top-10 lg:top-auto lg:bottom-12.5 md:size-[25vw] xl:size-112.5 md:rounded-[12px] bg-center bg-no-repeat"
					href="https://2gis.kz/almaty/firm/70000001021102210/76.919356%2C43.262951?m=76.922958%2C43.262189%2F15.15%2Fp%2F1.58%2Fr%2F0"
					target="_blank"
				/>

				<p className="md:hidden pl-3.75 mt-4 text-white font-montserrat text-sm leading-[150%] opacity-70 w-full">
					​Улица Макатаева, 131 к6​, 136 помещение
				</p>

				<div className="flex flex-col md:flex-row pl-3.75 pt-4 pb-9.75 md:pb-15 mt-12 md:mt-0 md:pt-10 md:px-10 w-full">
					<div className="flex md:flex-col justify-between items-center md:items-start w-full md:max-w-40 lg:h-79.75">
						<div className="lg:hidden flex flex-col items-end justify-end bg-(--primary-color) w-20 h-25">
							<Image
								src="/logo/A3.svg"
								alt="A3"
								width={43}
								height={27}
								className="mr-[7.01px] mb-[2.33px] w-[40.29px] h-[25.06px]"
							/>
							<Image
								src="/logo/print.svg"
								alt="print"
								width={44}
								height={10}
								className="mr-[6.93px] mb-[7.45px] w-[40.72px] h-[8.81px]"
							/>
						</div>

						<Logo className="max-lg:hidden" />

						<div className="mr-3.75 flex flex-col justify-between h-25 lg:h-30.75">
							<div>
								<p className="text-white font-montserrat font-semibold text-sm lg:text-base leading-[129%]">
									+7 777 130 5838
								</p>
								<p className="text-white font-montserrat text-sm lg:text-base leading-[150%] mt-1 lg:mt-1.5">
									info@a3print.kz
								</p>
							</div>
							<div className="flex gap-3">
								<a className="cursor-pointer">
									<Image
										src="/social-media/wp.svg"
										alt="whatsapp"
										width={32}
										height={32}
										className="opacity-50 hover:opacity-100 size-7 lg:size-8"
									/>
								</a>
								<a className="cursor-pointer">
									<Image
										src="/social-media/ig.svg"
										alt="instagram"
										width={32}
										height={32}
										className="opacity-50 hover:opacity-100 size-7 lg:size-8"
									/>
								</a>
								<a className="cursor-pointer">
									<Image
										src="/social-media/tt.svg"
										alt="tiktok"
										width={32}
										height={32}
										className="opacity-50 hover:opacity-100 size-7 lg:size-8"
									/>
								</a>
							</div>
						</div>
					</div>

					<div className="flex flex-col md:justify-end gap-7 lg:gap-10 md:w-full md:ml-[5%] lg:ml-[15%] xl:ml-[21%]">
						<p className="text-white text-2xl lg:text-[28px] leading-[129%] mt-8.25">
							Режим работы
						</p>

						<div className="flex flex-col gap-2 lg:gap-4">
							<div className="flex gap-12.5 border-b border-[#686a73] pb-1.5 lg:pb-2 w-full">
								<p className="max-w-30 w-full text-white font-montserrat text-base leading-[129%]">
									Пн — Пт
								</p>
								<p className="max-w-30 w-full text-(--primary-color) font-montserrat font-medium text-base leading-[129%]">
									10:00–19:00
								</p>
							</div>

							<div className="flex gap-12.5">
								<Text>Сб — Вс</Text>
								<Text> Выходной</Text>
							</div>

							<div className="flex gap-12.5">
								<Text> 30.12 - 01.01</Text>
								<Text> Выходной</Text>
							</div>
						</div>

						<p className="hidden md:block text-white font-montserrat text-sm lg:text-base leading-[150%] w-full lg:mt-1">
							​Улица Макатаева, 131 к6​, 136 помещение
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
