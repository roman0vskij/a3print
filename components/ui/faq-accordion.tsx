import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLocale } from "next-intl";
import { Fragment } from "react";

const ruItems = [
  {
    title: "Где можно посмотреть цены?",
    content:
      "Все базовые цены есть в прайс-листе и доступны по ссылке. Напишите нам в мессенджере — пришлём актуальный прайс или посчитаем прямо по вашему заказу.",
    subcontent: "Скачать прайс (PDF)",
  },
  {
    title: "Делаете ли вы 1 экземпляр?",
    content:
      "Да, печатаем даже тиражом в 1 штуку — визитки, стикеры, таблички, книги, одежду. Учтите, что единичный заказ часто выходит дороже в перерасчёте на штуку.",
  },
  {
    title: "Это AZ Принт?",
    content:
      "Нет, мы — А3 Принт. Некоторые по привычке читают «тройку» как букву Z, отсюда и путаница. Но правильно — А3 Принт, по числу, а не по алфавиту.",
  },
  {
    title: "Делаете печать на футболках, флагах, табличках?",
    content:
      "Да. Печатаем на одежде, флагах, баннерах, табличках — как для улицы, так и для помещений. Поможем подобрать подходящий материал под ваш запрос.",
  },
  {
    title: "Что такое УФ (UV) печать и она точно не сотрётся?",
    content:
      "УФ-печать — это стойкая печать ультрафиолетовыми чернилами. Она держится на большинстве поверхностей: пластике, дереве, стекле, металле. Не боится воды, солнца и механического воздействия.",
  },
  {
    title: "Какой минимальный тираж на стикеры?",
    content:
      "На рафлатаке — от 1 листа формата SRA3 (320×450 мм), на оракале — от 1 квадратного метра. Количество стикеров на листе или квадратном метре зависит от их размера. Напишите нам, объясним, чем отличаются материалы и поможем определиться.",
  },
  {
    title: "Как подготовить файл к печати, если у нас свой дизайнер?",
    content:
      "Идеальный формат — PDF или TIFF в CMYK, с вылетами по 2–3 мм и шрифтами, переведёнными в кривые. Также принимаем макеты в AI, CDR, PSD.",
    subcontent: "Скачать инструкцию по подготовке макета (.pdf)",
  },
  {
    title: "А если у нас нет дизайна, вы можете сделать файл сами?",
    content:
      "Да. Наш дизайнер может разработать макет с нуля или доработать ваш текущий. Работа начинается после согласования деталей.",
  },
  {
    title: "Какие сроки выполнения заказов?",
    content:
      "Сроки зависят от объёма и сложности. Обычно — от 1 рабочего дня. Срочные заказы обсуждаются индивидуально. Договоримся.",
  },
  {
    title: "Есть ли доставка, постоплата и работаете ли по субботам?",
    content:
      "Да, возможна доставка по городу и регионам. Постоплата — для постоянных клиентов и при заключении договора. По субботам работаем по договорённости — уточняйте у менеджера.",
  },
];

const kzItems = [
  {
    title: "Бағаларды қайдан көруге болады",
    content:
      "Барлық негізгі бағалар прайс-парақта бар, оны сілтеме арқылы алуға болады. Бізге мессенджерде жазсаңыз, біз сізге өзекті бағаны жібереміз немесе сіздің тапсырысыңыз бойынша есептеп береміз.",
    subcontent: "Прайсты жүктеу (PDF)",
  },
  {
    title: "Сіздер 1 дана өнім жасайсыздар ма?",
    content:
      "Иә, біз визиткалар, стикерлер, тақтайшалар, кітаптар, киімдерді тіпті 1 дана таралыммен де басып шығарамыз. Есіңізде болсын, бір тапсырыс көбінесе бір данаға бөліп есептегенге қарағанда қымбатырақ болады.",
  },
  {
    title: "Бұл AZ Принт пе?",
    content:
      "Жоқ, біз A3 Принтпіз. Кейбіреулер үйреншікті әдетпен 'үштікті' Z әрпі де оқиды, сондықтан көп қателесіп жатады. Бірақ дұрысы - A3 принт, әліпби бойынша емес, сан бойынша.",
  },
  {
    title: "Футболкаларға, жалауларға, тақтайшаларға басып шығарасыздар ма?",
    content:
      "Иә. Біз киімге, жалауларға, баннерлерге, тақтайшаларға көше үшін де, үй-жайлар үшін де басып шығарамыз. Біз сіздің сұранысыңызға сәйкес материалды таңдауға көмектесеміз.",
  },
  {
    title:
      "ЧУК (UV) басып шығару дегеніміз не және ол кетіп қалмайтыны рас па?",
    content:
      "УК-басып шығару - ультракүлгін сиямен қатты басып шығару. Ол көптеген беттерде ұзақ сақталады: пластик, ағаш, шыны, металл. Судан, күннен және механикалық әсерден қорықпайды.",
  },
  {
    title: "Стикерлердің минималды саны қандай?",
    content:
      "Рафлатакта-SRA3 форматындағы 1 парақтан (320×450 мм), оракалда — 1 шаршы метрден бастап. Парақтағы немесе шаршы метрдегі жапсырмалардың саны олардың өлшеміне байланысты. Бізге жазыңыз, материалдардың ерекшелігін түсіндіріңіз және біз шешім қабылдауға көмектесеміз.",
  },
  {
    title:
      "Егер бізде дизайнер болса, файлды басып шығаруға қалай дайындауға болады?",
    content:
      "Идеал формат — CMYK-тегі PDF немесе TIFF, 2-3 мм ауытқулары және қисықтарға аударылған қаріптері бар. Сондай-ақ, біз АІ, CDR, PSD-де макеттерді қабылдаймыз.",
    subcontent: "Макетті дайындау бойынша нұсқаулықты жүктеп алыңыз (PDF)",
  },
  {
    title: "Егер бізде дизайн болмаса, файлды өзіңіз жасай аласыз ба?",
    content:
      "Иә. Біздің дизайнер макетті нөлден бастап жобалай алады немесе сіздің бастаған жұмысыңызды аяқтай алады. Жұмыс толық келіскеннен кейін басталады.",
  },
  {
    title: "Тапсырыстарды орындау мерзімі қандай?",
    content:
      "Мерзімдер тапсырыстың көлемі мен күрделілігіне байланысты. Әдетте-1 жұмыс күнінен басталады. Шұғыл тапсырыстар жеке талқыланады. Келісеміз.",
  },
  {
    title: "Жеткізу, кейінгі төлем бар ма және сенбіде жұмыс істейсіздер ме?",
    content:
      "Иә, қала мен аймақтарға жеткізу қызметі бар. Кейінгі төлем - тұрақты клиенттер үшін және шарт жасасу кезінде жасалады. Сенбіде біз келісім бойынша жұмыс істейміз, менеджерден нақтысын сұрап алыңыз.",
  },
];

export function FAQAccordion() {
  const locale = useLocale();

  const items = locale === "kz" ? kzItems : ruItems;

  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="lg:hidden max-w-[345px] w-full flex flex-col md:flex-row md:flex-wrap gap-3 items-center mx-auto"
      >
        {items.map(({ title, content, subcontent }, index) => (
          <AccordionItem
            key={`accordion-item-${index}`}
            value={`item-${index}`}
            className="w-full max-w-108 rounded-xl p-4 custom-shadow min-h-[68px]"
          >
            <AccordionTrigger className="w-full font-medium text-sm md:text-base leading-[130%] font-montserrat p-0 flex items-center">
              {title}
            </AccordionTrigger>
            <AccordionContent className="w-full font-medium text-xs md:text-sm leading-[140%] font-montserrat">
              {subcontent ? (
                <>
                  {content}{" "}
                  <p className="mt-1">
                    {index === 0 ? (
                      <a
                        className="text-xs md:text-sm leading-[140%] font-montserrat font-semibold underline skip-ink text-(--font-blue-color)"
                        href="/price.pdf"
                        target="_blank"
                        download
                      >
                        {subcontent}
                      </a>
                    ) : (
                      <a
                        className="text-xs md:text-sm leading-[140%] font-montserrat font-semibold underline skip-ink text-(--font-blue-color)"
                        href="/for-print.pdf"
                        target="_blank"
                        download
                      >
                        {subcontent}
                      </a>
                    )}
                  </p>
                </>
              ) : (
                content
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Accordion
        type="single"
        collapsible
        className="max-lg:hidden max-w-[345px] lg:max-w-224 w-full flex gap-8 mx-auto"
      >
        <div className="flex flex-col gap-6">
          {items.map(({ title, content, subcontent }, index) =>
            index % 2 === 0 ? (
              <AccordionItem
                key={`accordion-item-${index}`}
                value={`item-${index}`}
                className="w-full max-w-108 rounded-xl p-4 lg:p-5 custom-shadow min-h-22"
              >
                <AccordionTrigger className="w-full font-medium text-lg leading-[140%] font-montserrat p-0 flex items-center">
                  {title}
                </AccordionTrigger>
                <AccordionContent className="w-full font-medium text-base leading-[140%] font-montserrat">
                  {subcontent ? (
                    <>
                      {content}{" "}
                      <p className="mt-1">
                        {index === 0 ? (
                          <a
                            className=" text-base leading-[140%] font-montserrat font-semibold underline skip-ink text-(--font-blue-color)"
                            href="/price.pdf"
                            target="_blank"
                            download
                          >
                            {subcontent}
                          </a>
                        ) : (
                          <a
                            className=" text-base leading-[140%] font-montserrat font-semibold underline skip-ink text-(--font-blue-color)"
                            href="/for-print.pdf"
                            target="_blank"
                            download
                          >
                            {subcontent}
                          </a>
                        )}
                      </p>
                    </>
                  ) : (
                    content
                  )}
                </AccordionContent>
              </AccordionItem>
            ) : (
              <Fragment key={`fragment${index}`} />
            )
          )}
        </div>

        <div className="flex flex-col gap-6">
          {items.map(({ title, content, subcontent }, index) =>
            index % 2 !== 0 ? (
              <AccordionItem
                key={`accordion-item-${index}`}
                value={`item-${index}`}
                className="w-full max-w-108 rounded-xl p-4 lg:p-5 custom-shadow min-h-22"
              >
                <AccordionTrigger className="w-full font-medium text-lg leading-[140%] font-montserrat p-0 flex items-center">
                  {title}
                </AccordionTrigger>
                <AccordionContent className="w-full font-medium text-base leading-[140%] font-montserrat">
                  {subcontent ? (
                    <>
                      {content}{" "}
                      <p className="mt-1">
                        {index === 0 ? (
                          <a
                            className=" text-base leading-[140%] font-montserrat font-semibold underline skip-ink text-(--font-blue-color)"
                            href="/price.pdf"
                            target="_blank"
                            download
                          >
                            {subcontent}
                          </a>
                        ) : (
                          <a
                            className=" text-base leading-[140%] font-montserrat font-semibold underline skip-ink text-(--font-blue-color)"
                            href="/for-print.pdf"
                            target="_blank"
                            download
                          >
                            {subcontent}
                          </a>
                        )}
                      </p>
                    </>
                  ) : (
                    content
                  )}
                </AccordionContent>
              </AccordionItem>
            ) : (
              <Fragment key={`fragment${index}`} />
            )
          )}
        </div>
      </Accordion>
    </>
  );
}
