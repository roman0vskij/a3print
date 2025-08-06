import { Title } from "../ui/title";

export function StagesOfWork() {
	return (
		<div className="flex flex-col items-center px-3.75 py-10">
			<Title title="Этапы работ" />
			<p className="w-70 mt-3 text-center text-[15px] leading-[140%]">
				<span className="text-(--font-blue-color)">6 шагов</span> — от заявки до
				готового результата
			</p>
			<div className="flex flex-col items-center mt-12"></div>
		</div>
	);
}
