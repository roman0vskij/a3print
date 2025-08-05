"use client";

type TProps = {
	title: string;
	w?: string;
};

export function Title({ title, w = "w-full" }: TProps) {
	return (
		<h2
			className={`${w} text-center text-4xl font-medium leading-[129%]`}
			key={title}
		>
			{title}
		</h2>
	);
}
