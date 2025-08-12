import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const languages = [
	{
		id: 1,
		name: "RU",
		img: {
			src: "/flags/ru.svg",
			alt: "ru",
			width: 28,
			height: 28,
		},
	},
	{
		id: 2,
		name: "KZ",
		img: {
			src: "/flags/kz.svg",
			alt: "kz",
			width: 28,
			height: 28,
		},
	},
];

export function LanguageSwitcher() {
	const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="flex items-center lg:mb-4">
				<Image
					src={selectedLanguage.img.src}
					alt={selectedLanguage.img.alt}
					width={selectedLanguage.img.width}
					height={selectedLanguage.img.height}
					className="mr-2"
				/>
				<div className="text-start flex flex-col gap-1 leading-none">
					<span className="text-base leading-[140%] font-semibold font-montserrat w-6.25">
						{selectedLanguage.name}
					</span>
				</div>
				<ChevronDown className="ml-4 lg:ml-5 size-6" />
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="w-full max-w-25 lg:max-w-26.25"
				align="start"
			>
				{languages.map((language) => (
					<DropdownMenuItem
						key={language.id}
						onClick={() => setSelectedLanguage(language)}
					>
						<div className="flex items-center">
							<div className="flex flex-col">
								<span>{language.name}</span>
							</div>
						</div>
						{selectedLanguage.id === language.id && (
							<Check className="ml-auto" />
						)}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
