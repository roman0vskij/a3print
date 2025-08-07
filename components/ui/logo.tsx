import Image from "next/image";

type TProps = {
	className?: string;
};

export function Logo({ className }: TProps) {
	return (
		<div
			className={`flex flex-col items-end justify-end bg-(--primary-color) w-11.25 h-14 ${className}`}
		>
			<Image
				src="/logo/A3.svg"
				alt="A3"
				width={43}
				height={27}
				className="mr-[3.95px] mb-[1.31px] w-[22.66px] h-[14.1px]"
				// className="mr-[7.36px] mb-[2.45px]"
			/>
			<Image
				src="/logo/print.svg"
				alt="print"
				width={44}
				height={10}
				className="mr-[3.9px] mb-[4.19px] w-[22.9px] h-[4.95px]"
				// className="mr-[7.28px] mb-[7.82px]"
			/>
		</div>
	);
}
