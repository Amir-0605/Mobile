import { useState } from 'react'
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='bg-[#0F1F1F] text-white pb-5'>
            <div className='container'>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 pb-8">

                    {/* PHONE */}
                    <div className="flex flex-col gap-3">
                        <a href="tel:+79789957505" className="text-lg font-semibold">
                            7-(978)995-75-05
                        </a>

                        <button
                            onClick={() => setOpen(true)}
                            className='bg-[#29494C] text-white rounded-3xl p-3'
                        >
                            Связаться с нами
                        </button>
                    </div>

                    {/* LINKS */}
                    <div className="flex flex-col gap-2 text-sm">
                        <Link to="#" className="hover:text-gray-300">Главная</Link>
                        <Link to="/filter" className="hover:text-gray-300">Каталог</Link>
                        <Link to="#" className="hover:text-gray-300">О нас</Link>
                        <Link to="#" className="hover:text-gray-300">Контакты</Link>
                    </div>

                    {/* SOCIAL */}
                    <div className="flex gap-4 text-2xl">
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTelegram /></a>
                        <a href="#"><FaYoutube /></a>
                    </div>

                </div>

                {/* COPYRIGHT */}
                <div className="border-t border-white/10 pt-4 text-center text-sm text-white/60">
                    © 2024 Крымские Берега
                </div>

                {/* MODAL (НЕ ТРОГАЛ) */}
                {open && (
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-3 sm:p-4 backdrop-blur-sm">

                        <div className="relative w-full max-w-[95%] sm:max-w-2xl lg:max-w-4xl rounded-2xl sm:rounded-[32px] bg-[#111] p-4 sm:p-6 md:p-10 text-white">

                            <button
                                onClick={() => setOpen(false)}
                                className="absolute right-3 top-3 sm:right-5 sm:top-5 text-3xl sm:text-4xl md:text-5xl leading-none"
                            >
                                ×
                            </button>

                            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4">
                                Оставьте заявку на консультацию
                            </h1>

                            <p className="mb-6 sm:mb-8 text-sm sm:text-base text-white/70">
                                Наш менеджер свяжется с вами для уточнения всех деталей и подбора идеального варианта
                            </p>

                            <div className="flex flex-col gap-4 sm:gap-5">

                                <div className="flex flex-col gap-2">
                                    <label className="text-xs sm:text-sm text-white/70">Имя</label>
                                    <input
                                        placeholder="Введите имя"
                                        className="w-full h-[48px] sm:h-[55px] md:h-[60px] px-3 sm:px-4 rounded-xl bg-white/10 border border-white/20 text-white outline-none"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-xs sm:text-sm text-white/70">Телефон</label>
                                    <input
                                        placeholder="+7 (000) 000 00 00"
                                        className="w-full h-[48px] sm:h-[55px] md:h-[60px] px-3 sm:px-4 rounded-xl bg-white/10 border border-white/20 text-white outline-none"
                                    />
                                </div>

                                <label className="flex items-start gap-3 text-xs sm:text-sm text-white">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 accent-[#F6FFD7] mt-1 sm:mt-0"
                                    />
                                    <span className="leading-snug">
                                        Согласен на обработку персональных данных
                                    </span>
                                </label>

                                <button className="h-[52px] sm:h-[60px] md:h-[70px] w-full rounded-2xl bg-[#F6FFD7] text-black text-base sm:text-lg md:text-xl">
                                    Перезвоните мне
                                </button>

                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Footer