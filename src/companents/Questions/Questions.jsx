import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const faqData = [
    {
        question: "Говорят, в Крыму большие проблемы с водой.",
        answer:
            "Проблема дефицита воды действительно актуальна для части регионов Крыма, однако Северо-Западное побережье — одно из ключевых исключений.",
    },
    {
        question:
            "Какие гарантии, что сельхозземля реально сменит статус?",
        answer:
            "Развитие Западного побережья Крыма официально закреплено как приоритетное направление.",
    },
    {
        question:
            "Как проходит сделка, если я нахожусь в другом регионе?",
        answer:
            "Более 60% инвесторов покупают участки дистанционно через Сбербанк и Росреестр.",
    },
    {
        question:
            "Насколько безопасно сейчас покупать землю в Крыму с точки зрения права?",
        answer:
            "Мы работаем только с участками, имеющими прозрачную историю владения в правовом поле РФ. Перед тем как выставить массив на продажу, мы проводим полный аудит документов, межевание и постановку на кадастровый учет. Вы покупаете актив напрямую у собственника, что исключает цепочки посредников и гарантирует юридическую чистоту сделки."
    }
];

const Questions = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto py-10 px-5">
            <div className="space-y-6">
                <h1 className="text-xl font-bold border-b-1 pb-4">Часто задаваемые вопросы</h1>
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="border-b border-[#D9D9D9] pb-5"
                    >
                        <div className="flex items-start justify-between gap-5">
                            <h2 className="text-2xl font-medium text-[#29494C]">
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
                                    <FaEyeSlash />
                                ) : (
                                    <FaEye />
                                )}
                            </button>
                        </div>

                        <div
                            className={`overflow-hidden transition-all duration-500 ${openIndex === index
                                ? "max-h-96 opacity-100 mt-4"
                                : "max-h-0 opacity-0"
                                }`}
                        >
                            <p className="text-[#666] text-lg leading-8">
                                {item.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Questions;