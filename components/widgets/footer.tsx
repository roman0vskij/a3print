import Image from "next/image";
import { Logo } from "../ui/logo";

export function Footer() {
	return (
		<footer className="flex flex-col items-center bg-(--footer-color) h-fit w-full">
			{/* <Image
				src="/maps/map.jpg"
				alt="Карта"
				width={985}
				height={746}
				className="absolute"
			/> */}

			{/* <a
				className="w-fit h-10"
				href="https://2gis.kz/almaty/firm/70000001021102210/76.919356%2C43.262951?m=76.922958%2C43.262189%2F15.15%2Fp%2F1.58%2Fr%2F0"
				target="_blank"
			> */}
			<a
				className="bg-[url(/maps/map.jpg)] h-62.5 w-full bg-center bg-no-repeat"
				href="https://2gis.kz/almaty/firm/70000001021102210/76.919356%2C43.262951?m=76.922958%2C43.262189%2F15.15%2Fp%2F1.58%2Fr%2F0"
				target="_blank"
			/>
			{/* </a> */}
			<p className="pl-3.75 mt-4 text-white font-montserrat text-sm leading-[150%] opacity-70 w-full">
				​Улица Макатаева, 131 к6​, 136 помещение
			</p>

			<div className="pl-3.75 pt-4 pb-9.75 mt-12 w-full">
				<div className="flex justify-between items-center w-full">
					<div className="flex flex-col items-end justify-end bg-(--primary-color) w-20 h-25">
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

					<div className="mr-3.75 flex flex-col justify-between h-25">
						<div>
							<p className="text-white font-montserrat font-semibold text-sm leading-[129%]">
								+7 777 130 5838
							</p>
							<p className="text-white font-montserrat text-sm leading-[150%] mt-1">
								info@a3print.kz
							</p>
						</div>
						<div className="flex gap-3">
							<a>
								<Image
									src="/social-media/wp.svg"
									alt="whatsapp"
									width={32}
									height={32}
									className="opacity-50 hover:opacity-100 size-7"
								/>
							</a>
							<a>
								<Image
									src="/social-media/ig.svg"
									alt="instagram"
									width={32}
									height={32}
									className="opacity-50 hover:opacity-100 size-7"
								/>
							</a>
							<a>
								<Image
									src="/social-media/tt.svg"
									alt="tiktok"
									width={32}
									height={32}
									className="opacity-50 hover:opacity-100 size-7"
								/>
							</a>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-7">
					<p className="text-white text-2xl leading-[129%] mt-8.25">
						Режим работы
					</p>

					<div className="flex flex-col gap-2">
						<div className="flex gap-12.5 border-b border-[#686a73] pb-1.5">
							<p className="max-w-30 w-full text-white font-montserrat text-base leading-[129%]">
								Пн — Пт
							</p>
							<p className="max-w-30 w-full text-(--primary-color) font-montserrat font-medium text-base leading-[129%]">
								10:00–19:00
							</p>
						</div>

						<div className="flex gap-12.5">
							<p className="max-w-30 w-full text-white font-montserrat font-light text-base leading-[129%]">
								Сб — Вс
							</p>
							<p className="max-w-30 w-full text-white font-montserrat font-light text-base leading-[129%]">
								Выходной
							</p>
						</div>

						<div className="flex gap-12.5">
							<p className="max-w-30 w-full text-white font-montserrat font-light text-base leading-[129%]">
								30.12 - 01.01
							</p>
							<p className="max-w-30 w-full text-white font-montserrat font-light text-base leading-[129%]">
								Выходной
							</p>
						</div>
					</div>

					<p className="hidden text-white font-montserrat text-base leading-[150%]">
						​Улица Макатаева, 131 к6​, 136 помещение
					</p>
				</div>
			</div>
		</footer>
	);
}
