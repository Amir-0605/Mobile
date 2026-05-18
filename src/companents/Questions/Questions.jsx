import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useEffect } from "react";
const faqData = [
    {
        question: "Говорят, в Крыму большие проблемы с водой.",
        answer:
            `Проблемы с дефицитом воды актуальны для многих районов Крыма, но Северо-Западное побережье — исключение. Этот регион расположен на мощных линзах подземных вод, которых с запасом хватает и для жизни, и для масштабных туристических проектов. Здесь вода — это доступный ресурс, а не предмет строгой экономии. Самым надежным и быстрым решением для вашего участка станет личная скважина: глубина залегания небольшая, а объема воды достаточно для любых нужд.`,
    },
    {
        question:
            "Какие гарантии, что сельхозземля реально сменит статус?",
        answer:
            `Крым сегодня идет по проверенному пути Краснодарского края 10–15-летней давности. Вспомните Анапу или Витязево: территории, которые вчера были полями, сегодня превратились в процветающие курортные зоны и отельные кластеры. Развитие Западного побережья официально закреплено в планах региона как приоритетное направление. Перевод земель под рекреацию и туризм здесь — это не случайность, а государственная стратегия. В рамках наших проектных массивов весь этот административный путь мы берем на себя.`,
    },
    {
        question:
            "Как проходит сделка, если я нахожусь в другом регионе?",
        answer:
            `Более 60% наших инвесторов — жители материковой части России. Мы отработали механизм до автоматизма: сделка проходит через защищенные государственные сервисы (Сбербанк, МФЦ) с использованием электронной подписи. Вы получаете официальную выписку из ЕГРН (Росреестра). Это самый надежный документ, подтверждающий ваше право собственности, где бы вы ни находились.`,
    },
    {
        question:
            "Насколько безопасно сейчас покупать землю в Крыму с точки зрения права?",
        answer:
            `Мы работаем только с участками, имеющими прозрачную историю владения в правовом поле РФ. Перед тем как выставить массив на продажу, мы проводим полный аудит документов, межевание и постановку на кадастровый учет. Вы покупаете актив напрямую у собственника, что исключает цепочки посредников и гарантирует юридическую чистоту сделки.`
    }
];



const Questions = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (

        <div className="w-full overflow-x-hidden bg-[linear-gradient(45deg,#FFFFFF_0%,#99999999_100%)]">
            <div className="max-w-4xl mx-auto py-10 px-5">
                <div className="space-y-6">
                    <h1 className="text-xl font-bold border-b pb-4">
                        Часто задаваемые вопросы
                    </h1>

                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="border-b border-[#D9D9D9] pb-5"
                        >
                            <div className="flex items-start justify-between gap-5">
                                <h2 className="text-2xl font-medium text-[#29494C] break-words">
                                    {item.question}
                                </h2>

                                <button
                                    onClick={() => toggleFaq(index)}
                                    className={`transition-all duration-300 text-2xl ${openIndex === index
                                        ? "-translate-y-1 text-[#29494C]"
                                        : "text-[#999]"
                                        }`}
                                >
                                    {openIndex === index ? (
                                        <FaCaretUp />
                                    ) : (
                                        <FaCaretDown />
                                    )}
                                </button>
                            </div>

                            <div
                                className={`overflow-hidden transition-all duration-500 ${openIndex === index
                                    ? "max-h-screen opacity-100 mt-4"
                                    : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="text-[#666] text-lg leading-8 break-words">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Questions;