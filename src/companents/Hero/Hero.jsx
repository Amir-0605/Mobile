import { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from 'react-router-dom';
import { FiCheckCircle } from "react-icons/fi";

const Hero = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='relative bg-[url("/src/companents/assets/bgimg.webp")] bg-no-repeat pt-22 lg:pt-25 lg:pb-150 lg:w-full h-[1150px] lg:h-auto lg:bg-cover lg:bg-center'>

            {/* overlay */}
            <div className='absolute inset-0 bg-black/40'></div>

            {/* content */}
            <div className='relative z-10'>

                <div className='container lg:max-w-7xl lg:mx-auto'>
                    <h1 className='text-white font-bold text-2xl lg:text-4xl'>
                        Крымские Берега:
                        Ваша земля с прозрачной историей
                    </h1>

                    <h3 className='mt-2 text-base lg:text-xl text-white'>
                        Прямая продажа участков от собственника. <br />
                        Мы гарантируем юридическую чистоту каждого метра: от небольших наделов под дом, до гектарных массивов для бизнеса
                    </h3>

                    <div className='flex gap-3 pb-1 pt-3 lg:pt-6'>
                        <Link to={"/filter"} className='z-10 bg-[#29494C] text-[#fff] p-2 text-sm lg:text-base rounded-3xl shadow-[0_4px_20px_#00000040] cursor-pointer'>
                            Подобрать участок
                        </Link>
                        <button onClick={() => setOpen(true)} className='z-10 text-sm lg:text-base p-2 border border-[#9E8470E5] text-white rounded-3xl cursor-pointer shadow-[0_4px_20px_#00000040]'>
                            Связаться с нами
                        </button>
                    </div>

                    <div>
                        <h1 className='text-white text-lg lg:text-2xl'>
                            Кому подойдёт покупка земли?
                        </h1>
                        <h2 className='text-white text-base lg:text-lg'>
                            Выберите, для чего вы хотите приобрести участок
                        </h2>

                        <div className="max-w-6xl mx-auto py-3 lg:py-6">

                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={20}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                breakpoints={{
                                    640: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                }}
                                className="rounded-2xl"
                            >

                                {/* CARD 1 */}
                                <SwiperSlide>
                                    <div className="bg-white/60 backdrop-blur-md border border-[#29494C]/10 h-[370px] rounded-3xl flex flex-col p-6 lg:p-8 text-[#29494C]">

                                        <h1 className='text-center text-2xl font-bold lg:text-2xl font-500 mb-4'>
                                            Для семьи
                                        </h1>

                                        <h2 className='text-base lg:text-lg font-500 border-b border-[#29494C]/20 pb-4 mb-6'>
                                            Дом у моря для спокойной жизни
                                        </h2>

                                        <div className='text-sm lg:text-base flex flex-col gap-6'>

                                            <div className='flex items-start gap-3'>
                                                <FiCheckCircle className='mt-1 shrink-0 text-xl text-[#29494C]' />
                                                <p>Официальная прописка и собственность</p>
                                            </div>

                                            <div className='flex items-start gap-3'>
                                                <FiCheckCircle className='mt-1 shrink-0 text-xl text-[#29494C]' />
                                                <p>Свой дом у моря для семьи и отдыха</p>
                                            </div>

                                            <div className='flex items-start gap-3'>
                                                <FiCheckCircle className='mt-1 shrink-0 text-xl text-[#29494C]' />
                                                <p>Проверенные участки под строительство</p>
                                            </div>

                                        </div>
                                    </div>
                                </SwiperSlide>

                                {/* CARD 2 */}
                                <SwiperSlide>
                                    <div className="bg-white/60 backdrop-blur-md border border-[#29494C]/10 h-[370px] rounded-3xl flex flex-col p-6 lg:p-8 text-[#29494C]">

                                        <h1 className='text-center text-2xl font-bold lg:text-2xl font-500 mb-4'>
                                            Для инвестиций
                                        </h1>

                                        <h2 className='text-base lg:text-lg font-500 border-b border-[#29494C]/20 pb-4 mb-6'>
                                            Актив с потенциалом роста
                                        </h2>

                                        <div className='text-sm lg:text-base flex flex-col gap-6'>

                                            <div className='flex items-start gap-3'>
                                                <FiCheckCircle className='mt-1 shrink-0 text-xl text-[#29494C]' />
                                                <p>Земля у моря — ограниченный ресурс</p>
                                            </div>

                                            <div className='flex items-start gap-3'>
                                                <FiCheckCircle className='mt-1 shrink-0 text-xl text-[#29494C]' />
                                                <p>Рост стоимости при развитии территории</p>
                                            </div>

                                            <div className='flex items-start gap-3'>
                                                <FiCheckCircle className='mt-1 shrink-0 text-xl text-[#29494C]' />
                                                <p>Выгодный вход на раннем этапе</p>
                                            </div>

                                        </div>
                                    </div>
                                </SwiperSlide>

                                {/* CARD 3 */}
                                <SwiperSlide>
                                    <div className="bg-white/60 backdrop-blur-md border border-[#29494C]/10 h-[370px] rounded-3xl flex flex-col p-6 lg:p-8 text-[#29494C]">

                                        <h1 className='text-center text-2xl font-bold lg:text-2xl font-500 mb-4'>
                                            Для бизнеса
                                        </h1>

                                        <h2 className='text-base lg:text-lg font-500 border-b border-[#29494C]/20 pb-4 mb-6'>
                                            Земля для туристических проектов
                                        </h2>

                                        <div className='text-sm lg:text-base flex flex-col gap-6'>

                                            <div className='flex items-start gap-3'>
                                                <FiCheckCircle className='mt-1 shrink-0 text-xl text-[#29494C]' />
                                                <p>Стабильный туристический спрос</p>
                                            </div>

                                            <div className='flex items-start gap-3'>
                                                <FiCheckCircle className='mt-1 shrink-0 text-xl text-[#29494C]' />
                                                <p>Поддержка агротуризма и бизнеса</p>
                                            </div>

                                            <div className='flex items-start gap-3'>
                                                <FiCheckCircle className='mt-1 shrink-0 text-xl text-[#29494C]' />
                                                <p>Редкие участки с хорошими видами</p>
                                            </div>

                                        </div>
                                    </div>
                                </SwiperSlide>

                            </Swiper>

                            <div className='flex justify-center border p-2 lg:p-3 mt-3 bg-white/40 backdrop-blur-md border-[#29494C]/20 shadow-[0_4px_20px_#00000020] rounded-3xl lg:mt-6'>
                                <Link to={'/knowbenefits'} className='text-sm z-999 lg:text-base text-[#29494C]'>
                                    Узнать о выгоде инвестиций
                                </Link>
                            </div>

                        </div>
                    </div>

                    {/* MODAL */}
                    <div>
                        {open && (
                            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-3 sm:p-4 backdrop-blur-sm">

                                <div className="relative w-full max-w-[95%] sm:max-w-2xl lg:max-w-4xl rounded-2xl sm:rounded-[32px] bg-[#111] p-4 sm:p-6 md:p-10 text-white">

                                    {/* крестик */}
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

                                    {/* form */}
                                    <div className="flex flex-col gap-4 sm:gap-5">

                                        {/* имя */}
                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs sm:text-sm text-white/70">Имя</label>
                                            <input
                                                placeholder="Введите имя"
                                                className="w-full h-[48px] sm:h-[55px] md:h-[60px] px-3 sm:px-4 rounded-xl bg-white/10 border border-white/20 text-white outline-none"
                                            />
                                        </div>

                                        {/* телефон */}
                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs sm:text-sm text-white/70">Телефон</label>
                                            <input
                                                placeholder="+7 (000) 000 00 00"
                                                className="w-full h-[48px] sm:h-[55px] md:h-[60px] px-3 sm:px-4 rounded-xl bg-white/10 border border-white/20 text-white outline-none"
                                            />
                                        </div>

                                        {/* чекбокс (ИСПРАВЛЕН) */}
                                        <label className="flex items-start gap-3 text-xs sm:text-sm text-white">

                                            <input
                                                type="checkbox"
                                                className="w-5 h-5 accent-[#F6FFD7] mt-1 sm:mt-0"
                                            />

                                            <span className="leading-snug">
                                                Согласен на обработку персональных данных
                                            </span>

                                        </label>

                                        {/* кнопка */}
                                        <button className="h-[52px] sm:h-[60px] md:h-[70px] w-full rounded-2xl bg-[#F6FFD7] text-black text-base sm:text-lg md:text-xl">
                                            Перезвоните мне
                                        </button>

                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero