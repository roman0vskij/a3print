import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";

const ruTabs = [
  {
    id: "1",
    value: "Офсетная и цифровая печать",
    items: [
      { title: "Визитки" },
      { title: "Листовки" },
      { title: "Буклеты" },
      { title: "Брошюры" },
      { title: "Плакаты" },
      { title: "Открытки" },
      { title: "Пригласительные" },
      { title: "Календари" },
      { title: "Наклейки" },
      { title: "Стикеры" },
      { title: "Папки" },
      { title: "Сертификаты" },
      { title: "Дипломы" },
      { title: "Каталоги" },
      { title: "Упаковка" },
      { title: "Журналы" },
      { title: "Этикетки" },
    ],
  },
  {
    id: "2",
    value: "Рекламная продукция и широкоформатная печать",
    items: [
      { title: "Баннеры" },
      { title: "Входные группы" },
      { title: "Штендеры" },
      { title: "Таблички" },
      { title: "Лайтбоксы" },
      { title: "Брендволлы" },
      { title: "Плакаты" },
      { title: "Оформление витрин" },
      { title: "Оклейка транспорта" },
      { title: "POS-материалы" },
      { title: "Промостойки" },
      { title: "Ролл-апы" },
      { title: "Пресс-воллы" },
      { title: "Интерьерные стенды" },
      { title: "Самоклеящиеся плёнки" },
      { title: "Печать на пластике, стекле, металле, дереве" },
      { title: "Печать на ткани" },
      { title: "Фотообои" },
      { title: "Печать на сетке" },
      { title: "Стикеры для витрин" },
      { title: "Магниты" },
    ],
  },
  {
    id: "3",
    value: "Сувенирная продукция",
    items: [
      { title: "Ручки с логотипом" },
      { title: "Ежедневники с логотипом" },
      { title: "Брелоки" },
      { title: "Кружки с печатью" },
      { title: "Эко-сумки / Шоперы" },
      { title: "Флешки с брендированием" },
      { title: "Зонты с логотипом" },
      { title: "Подарочные пакеты" },
      { title: "Значки" },
      { title: "Магниты сувенирные" },
      { title: "Футболки / Худи" },
      { title: "Чехлы для телефона" },
    ],
  },
  {
    id: "4",
    value: "Дизайн и предпечатная подготовка",
    items: [
      { title: "Подготовка макетов к печати" },
      { title: "Дизайн визиток, листовок, буклетов и т.д." },
      { title: "Создание макетов упаковки и высечных форм" },
      { title: "Верстка брошюр, каталогов, журналов" },
      { title: "Дизайн для широкоформатной и сувенирной продукции" },
      { title: "Создание и обрисовка  логотипа" },
    ],
  },
  {
    id: "5",
    value: "Упаковка и упаковочные материалы",
    items: [
      { title: "Картонные коробки (самосборные, на замке, с крышкой)" },
      { title: "Упаковка с высечкой по форме изделия" },
      { title: "Подарочные коробки (ламинированные, кашированные)" },
      { title: "Вкладыши / ложементы из картона" },
      { title: "Обечайки / муфты" },
      { title: "Крафт-пакеты с печатью" },
      { title: "Обёрточная бумага / брендированная калька" },
      { title: "Картонные бирки / ярлыки" },
      { title: "Этикетки на крафт-бумаге" },
      { title: "Бумажные ленты с логотипом" },
    ],
  },
];

const kzTabs = [
  {
    id: "1",
    value: "Офсеттік және цифрлық басып шығару",
    items: [
      { title: "Визиткалар" },
      { title: "Парақшалар" },
      { title: "Буклеттер" },
      { title: "Брошюралар" },
      { title: "Плакаттар" },
      { title: "Ашық хаттар" },
      { title: "Шақыру билеттері" },
      { title: "Күнтізбелер" },
      { title: "Жапсырмалар" },
      { title: "Стикерлер" },
      { title: "Папкалар" },
      { title: "Сертификаттар" },
      { title: "Дипломдар" },
      { title: "Каталогтар" },
      { title: "Қаптама" },
      { title: "Журналдар" },
      { title: "Этикеткалар" },
    ],
  },
  {
    id: "2",
    value: "Жарнама өнімі және кең форматты басып шығару",
    items: [
      { title: "Баннерлер" },
      { title: "Кіру топтары" },
      { title: "Штендер" },
      { title: "Маңдайшалар" },
      { title: "Лайтбокстар" },
      { title: "Брендволдар" },
      { title: "Плакаттар" },
      { title: "Витриналарды безендіру" },
      { title: "Көлікке жапсырмалар жапсыру" },
      { title: "POS материалдары" },
      { title: "Промо бағандар" },
      { title: "Ролл-ап" },
      { title: "Пресс-волл" },
      { title: "Интерьер стендтері" },
      { title: "Өздігінен жабысатын пленкалар" },
      { title: "Пластмасса, шыны, металл, ағашқа басып шығару" },
      { title: "Матаға басып шығару" },
      { title: "Фото тұсқағаз" },
      { title: "Торға басып шығару" },
      { title: "Витриналарға арналған стикерлер" },
      { title: "Магниттер" },
    ],
  },
  {
    id: "3",
    value: "Кәдесый өнімдері",
    items: [
      { title: "Логотипі бар қаламдар" },
      { title: "Логотипі бар күнделіктер" },
      { title: "Әшекей ілгіштер" },
      { title: "Суреті бар кружкалар" },
      { title: "Эко сөмкелер / Шоперлер" },
      { title: "Брендтік флэш-дискілер" },
      { title: "Логотипі бар қолшатырлар" },
      { title: "Сыйлық пакеттері" },
      { title: "Белгішелер" },
      { title: "Кәдесый магниттер" },
      { title: "Футболкалар / Капюшондар" },
      { title: "Телефон қаптары" },
    ],
  },
  {
    id: "4",
    value: "Дизайн және баспа алдындағы дайындық",
    items: [
      { title: "Макеттерді басып шығаруға дайындау" },
      { title: "Визиткалар, парақшалар, буклеттер және т. б." },
      { title: "Қаптама макеттерін және кескіш пішіндерді жасау" },
      { title: "Брошюраларды, каталогтарды, журналдарды орналастыру" },
      { title: "Үлкен форматты және кәдесый өнімдеріне арналған дизайн" },
      { title: "Логотипті жасау және сызу" },
    ],
  },
  {
    id: "5",
    value: "Қаптама және қаптама материалдары",
    items: [
      {
        title:
          "Картон қораптар (өздігінен жиналатын, құлыпталатын, қақпағы бар)",
      },
      { title: "Бұйым формасына қарай ойылған қаптама" },
      { title: "Сыйлық қораптары (ламинатталған, кашталған)" },
      { title: "Картоннан жасалған төсемдер / ложементтер" },
      { title: "Қаптар / муфталар" },
      { title: "Басып шығарылған крафт-пакеттер" },
      { title: "Орау қағазы / брендтік калька" },
      { title: "Картон биркалар/ жапсырмалар" },
      { title: "Крафт қағаз жапсырмалары" },
      { title: "Логотипі бар қағаз таспалар" },
    ],
  },
];

export function OffersAccordion() {
  const locale = useLocale();

  const items = locale === "kz" ? kzTabs : ruTabs;

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-2"
      className="lg:hidden max-w-[345px] md:max-w-[500px] w-full flex flex-col md:flex-row md:flex-wrap gap-3 items-center mx-auto"
    >
      {items.map(({ id, value, items }) => (
        <AccordionItem
          key={`accordion-item-${id}`}
          value={`item-${id}`}
          className="[&>div]:rounded-b-[8px] w-full max-w-108 rounded-xl min-h-[68px] [&>[data-state='open']~div]:shadow-lg"
        >
          <AccordionTrigger className="rounded-none [&[data-state=open]]:rounded-t-[8px] w-full p-4 flex justify-between items-center [&>div]:hidden [&[data-state=open]]:bg-(--primary-color)">
            <p className="font-medium text-xs md:text-sm leading-[125%]">
              {value}
            </p>
            <Image
              src={`/offers/${id}.jpg`}
              alt={value}
              height={100}
              width={220}
              className="w-30 h-13.75 rounded-[4px] grow-0 shrink-0"
            />
          </AccordionTrigger>
          <AccordionContent className="w-full px-3 py-4 flex flex-wrap gap-3 rounded-b-[8px]">
            {items.map((item) => (
              <div
                key={id + item.title}
                className="bg-[#fffadb] cursor-pointer flex items-center gap-1 rounded-[4px] pl-2 py-1 pr-1"
              >
                <p className="font-montserrat leading-[150%] font-medium text-xs md:text-sm">
                  {item.title}
                </p>
                <ChevronRight className="size-3" />
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
