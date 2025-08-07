import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronsUpDown, Check } from "lucide-react";
import { useState } from "react";

const languages = [
	{
		id: 1,
		name: "RU",
	},
	{
		id: 2,
		name: "KZ",
	},
];

export function LanguageSwitcher() {
	const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="flex items-center gap-2 bg-accent py-2.5 px-3 rounded-lg mx-auto">
				<Avatar className="rounded-lg h-8 w-8">
					<AvatarFallback className="rounded-lg bg-primary text-primary-foreground">
						{selectedLanguage.name[0]}
					</AvatarFallback>
				</Avatar>
				<div className="text-start flex flex-col gap-1 leading-none">
					<span className="text-sm leading-none font-semibold truncate max-w-[17ch]">
						{selectedLanguage.name}
					</span>
				</div>
				<ChevronsUpDown className="ml-6 h-4 w-4 text-muted-foreground" />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-52" align="start">
				<DropdownMenuLabel>Workspaces</DropdownMenuLabel>
				{languages.map((language) => (
					<DropdownMenuItem
						key={language.id}
						onClick={() => setSelectedLanguage(language)}
					>
						<div className="flex items-center gap-2">
							<Avatar className="rounded-md h-8 w-8">
								<AvatarFallback className="rounded-md bg-primary/10 text-foreground">
									{language.name[0]}
								</AvatarFallback>
							</Avatar>
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
