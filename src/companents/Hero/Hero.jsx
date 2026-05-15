import { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from 'react-router-dom';

const Hero = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='bg-[url("/src/companents/assets/bgimg.webp")] bg-no-repeat pt-100 lg:pt-170 lg:w-full h-[1150px] lg:h-auto lg:bg-cover lg:bg-center'>
            <div className='container lg:max-w-7xl lg:mx-auto'>
                <h1 className='text-[#29494C] font-400 text-lg lg:text-4xl'>
                    Крымские Берега:
                    Ваша земля с прозрачной историей
                </h1>

                <h3 className='mt-2 text-base lg:text-xl text-[#29494C]'>
                    Прямая продажа участков от собственника. <br />
                    Мы гарантируем юридическую чистоту каждого метра: от небольших наделов под дом, до гектарных массивов для бизнеса
                </h3>

                <div className='flex gap-3 pb-1 pt-3 lg:pt-6'>
                    <Link to={"/filter"} className='z-10 bg-[#29494C] text-[#fff] p-2 text-sm lg:text-base rounded-3xl shadow-[0_4px_20px_#00000040] cursor-pointer'>
                        Подобрать участок
                    </Link>
                    <button onClick={() => setOpen(true)} className='z-10 text-sm lg:text-base p-2 border border-[#9E8470E5] text-[#29494C] rounded-3xl cursor-pointer shadow-[0_4px_20px_#00000040]'>
                        Связаться с нами
                    </button>
                </div>

                <div>
                    <h1 className='text-[#233F41] text-lg lg:text-2xl'>
                        Кому подойдёт покупка земли?
                    </h1>
                    <h2 className='text-[#233F41] text-base lg:text-lg'>
                        Выберите, для чего вы хотите приобрести участок
                    </h2>

                    <div className="max-w-6xl mx-auto py-3 pb-0 lg:py-6">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            className="rounded-2xl"
                        >
                            <SwiperSlide>
                                <div className="bg-white/50 h-[470px] rounded-2xl grid items-center p-4 justify-center text-[#29494C]">
                                    <h1 className='text-center text-xl lg:text-2xl font-500'>Для семьи</h1>
                                    <h2 className='text-base lg:text-lg font-500 border-b-1 pb-3'>
                                        Дом, где утро начинается с чистого воздуха и вида на горизонт
                                    </h2>
                                    <div className='text-sm lg:text-base flex flex-col gap-5'>
                                        <p>— Прописка и капитал: Стройте родовое поместье на собственной земле с полным правом регистрации и официальным адресом.</p>
                                        <p>— Традиция: Возвращайтесь к своему морю каждый год в дом, который принадлежит только вам.</p>
                                        <p>— Безопасность: Выбирайте из проверенных локаций, готовых к застройке.</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="bg-white/50 h-[470px] rounded-2xl grid items-center p-4 justify-center text-[#29494C]">
                                    <h1 className='text-center text-xl lg:text-2xl font-500'>Для инвестиций</h1>
                                    <h2 className='text-base lg:text-lg font-500 border-b-1 pb-3'>
                                        Ваш капитал на росте статуса земли
                                    </h2>
                                    <div className='text-sm lg:text-base flex flex-col gap-3'>
                                        <p>— Ограниченный ресурс: Новой земли у моря больше не появится. Это исчерпаемый актив, который дорожает просто за счет своей физической нехватки.</p>
                                        <p>— Точки взрывного роста: Забирайте прибыль на «событиях»: цена делает рывок при смене категории использования, межевании и подводе дорог к массиву.</p>
                                        <p>— Вход на старте: Заходите в проект по цене сельхозземель, пока территория только готовится к освоению.</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="bg-white/50 h-[470px] rounded-2xl grid items-center p-4 justify-center text-[#29494C]">
                                    <h1 className='text-center text-xl lg:text-2xl font-500'>Для бизнеса</h1>
                                    <h2 className='text-base lg:text-lg font-500 border-b-1 pb-3'>
                                        Площадки для доходных туристических проектов
                                    </h2>
                                    <div className='text-sm lg:text-base flex flex-col gap-3'>
                                        <p>— Гарантированный спрос: Люди всегда будут ехать к морю.</p>
                                        <p>— Государственная поддержка: Используйте новые упрощения для агротуризма.</p>
                                        <p>— Редкие локации: Массивы с лучшими видовыми характеристиками.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                        <div className='flex justify-center border p-2 lg:p-3 mt-3 bg-[#FFFFFF33] border-[#9E8470CC] shadow-[0_4px_20px_#00000040] rounded-3xl lg:mt-6'>
                            <Link to={'/knowbenefits'} className='text-sm lg:text-base'>
                                Узнать о выгоде инвестиций
                            </Link>
                        </div>
                    </div>
                </div>

                <div>
                    {open && (
                        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">

                            <div className="relative w-full max-w-4xl rounded-[32px] bg-[#111] p-6 md:p-10 text-white">

                                <button
                                    onClick={() => setOpen(false)}
                                    className="absolute right-5 top-5 text-3xl"
                                >
                                    ×
                                </button>

                                <h1 className="text-3xl md:text-5xl font-semibold mb-4">
                                    Оставьте заявку на консультацию
                                </h1>

                                <p className="mb-8 text-white/70">
                                    Наш менеджер свяжется с вами для уточнения всех деталей и подбора идеального варианта
                                </p>

                                <div className="flex flex-col lg:flex-row gap-5">

                                    <div className="w-full bg-[#F6FFD7] p-4 rounded-2xl">

                                        <input
                                            placeholder="Имя"
                                            className="w-full h-[60px] mb-4 px-4 rounded-xl bg-[#EDF6E4] text-black"
                                        />

                                        <input
                                            placeholder="+7 (000) 000 00 00"
                                            className="w-full h-[60px] px-4 rounded-xl bg-[#EDF6E4] text-black"
                                        />
                                    </div>

                                    <button className="h-[70px] w-full lg:w-[240px] rounded-2xl bg-[#F6FFD7] text-black text-xl">
                                        Готово
                                    </button>

                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Hero