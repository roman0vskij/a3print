import Image from "next/image";
import { ContactForm } from "../ui/contact-form";

export function Contacts() {
	return (
		<div
			id="contacts"
			className="flex flex-col items-center pt-12 py-11.5 px-3.75 w-full"
		>
			<h3 className="text-center text-[28px] font-medium leading-[125%]">
				Свяжитесь с нами
				<br />и будьте уверены
				<span className="text-center text-[28px] font-medium leading-[125%] text-(--font-blue-color)">
					<br />в качестве на 100%
				</span>
			</h3>

			<div className="flex justify-between mt-12 mb-8 w-full max-w-[345px]">
				<div className="flex flex-col items-center">
					<div className="size-10 rounded-sm bg-(--primary-color) flex justify-center items-center">
						<Image
							src="/phone.svg"
							alt="телефон"
							width={28}
							height={28}
							className="size-6"
						/>
					</div>
					<p className="mt-4 font-normal text-base leading-[129%] text-center">
						+7 777 130 5838
					</p>
				</div>
				<div className="flex flex-col items-center">
					<div className="size-10 rounded-sm bg-(--primary-color) flex justify-center items-center">
						<Image
							src="/mail.svg"
							alt="почта"
							width={32}
							height={32}
							className="size-7"
						/>
					</div>
					<p className="mt-4 font-normal text-base leading-[129%] text-center">
						info@a3print.kz
					</p>
				</div>
			</div>

			<ContactForm />
		</div>
	);
}
