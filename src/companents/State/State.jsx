import { useEffect } from "react";
import state from "../assets/state.webp"

const State = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='bg-[linear-gradient(90deg,#FFFFFF_0%,#99999999_100%)] pb-10'>
            <div className='container px-4 sm:px-6 lg:px-0'>

                <div className="pt-6 bg-white rounded-2xl shadow p-4 md:p-6 flex flex-col md:flex-row gap-4">

                    {/* Картинка */}
                    <img
                        src={state}
                        alt="Агротуризм"
                        className="w-full md:w-64 h-48 object-cover rounded-xl"
                    />

                    {/* Текст */}
                    <div className="flex flex-col gap-3">
                        <h2 className="text-lg md:text-xl font-bold text-[#29494C]">
                            Гостевые дома и агротуризм в России
                        </h2>

                        <p className="text-sm text-gray-600">
                            Сельские территории в России начинают получать новый импульс развития.
                            Власти расширяют возможности для создания гостевых домов и развития агротуризма.
                        </p>

                        <a
                            href="https://www.pnp.ru/economics/gostevykh-domov-dlya-agroturistov-stanet-bolshe.html"
                            target="_blank"
                            className="text-[#1f6f6b] font-medium underline"
                        >
                            Читать статью →
                        </a>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default State