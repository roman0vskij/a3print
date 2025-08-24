import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Locale } from "@/i18n/routing";
import { ChevronDown, Check } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";

const languages = [
  {
    id: 1,
    name: "ru",
    img: {
      src: "/flags/ru.svg",
      alt: "ru",
      width: 28,
      height: 28,
    },
  },
  {
    id: 2,
    name: "kz",
    img: {
      src: "/flags/kz.svg",
      alt: "kz",
      width: 28,
      height: 28,
    },
  },
];

export function LanguageSwitcher({ isLittle }: { isLittle?: boolean }) {
  const locale = useLocale();

  const selectedLanguage = locale === "kz" ? languages[1] : languages[0];
  const router = useRouter();

  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(nextLocale: string) {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale as Locale }
    );
  }

  return isLittle ? (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center lg:mb-4">
        <Image
          src={selectedLanguage.img.src}
          alt={selectedLanguage.img.alt}
          width={selectedLanguage.img.width}
          height={selectedLanguage.img.height}
          className="mr-2 size-6"
        />
        <div className="text-start flex flex-col gap-1.5 leading-none justify-center">
          <span className="text-xs leading-[140%] font-semibold font-montserrat w-4.75">
            {selectedLanguage.name.toUpperCase()}
          </span>
        </div>
        <ChevronDown className="ml-1.75 size-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-full max-w-25 lg:max-w-26.25"
        align="start"
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.id}
            onClick={() => onSelectChange(language.name)}
          >
            <div className="flex items-center">
              <div className="flex flex-col">
                <span className="sub2-font-nunito-sans">
                  {language.name.toUpperCase()}
                </span>
              </div>
            </div>
            {selectedLanguage.id === language.id && (
              <Check className="ml-auto" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
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
            {selectedLanguage.name.toUpperCase()}
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
            onClick={() => onSelectChange(language.name)}
          >
            <div className="flex items-center">
              <div className="flex flex-col">
                <span className="sub2-font-nunito-sans">
                  {language.name.toUpperCase()}
                </span>
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
