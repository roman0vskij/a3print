import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

export function OffersTabs() {
  const locale = useLocale();

  const tabs = locale === "kz" ? kzTabs : ruTabs;

  return (
    <Tabs
      orientation="vertical"
      defaultValue={tabs[0].value}
      className="max-lg:hidden w-full flex items-start justify-center max-w-282 mx-auto"
    >
      <TabsList className="flex flex-col gap-4 py-5 bg-background w-full">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="flex items-center w-full data-[state=active]:rounded-l-[8px] p-5 gap-8 data-[state=active]:bg-(--primary-color)"
          >
            <Image
              src={`/offers/${tab.id}.jpg`}
              alt={tab.value}
              height={100}
              width={220}
              className="w-55 h-25 rounded-[4px] grow-0 shrink-0"
            />
            <p className="text-start font-medium text-xl leading-[125%] w-full max-w-72 h-fit">
              {tab.value}
            </p>
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="min-h-201 max-w-[432px] w-full h-fit flex flex-col items-center gap-4.75 min-w-108 px-9 py-10 rounded-[8px] custom-shadow">
        {tabs.map((tab) =>
          tab.items.map((item) => (
            <TabsContent
              key={tab.value + item.title}
              value={tab.value}
              className="flex items-center w-full font-montserrat leading-[150%] font-medium hover:bg-[#fffadb] hover:[&>svg]:block hover:[&>div]:hidden rounded-[4px] px-3 py-2.5 cursor-pointer"
            >
              <p className="w-full font-montserrat leading-[150%] font-medium">
                {item.title}
              </p>
              <ChevronRight className="hidden size-5" />
              <div className="size-5" />
            </TabsContent>
          ))
        )}
      </div>
    </Tabs>
  );
}
