import { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img4 from "../assets/img4.webp"
import img5 from "../assets/img5.webp"
import img6 from "../assets/img6.webp"
import img7 from "../assets/img7.webp"

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Benefits = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [open, setOpen] = useState(false)

    return (
        <div className='bg-[linear-gradient(45deg,#FFFFFF_0%,#99999999_100%)] inset-0 bg-black/70 pt-10 sm:pt-16 lg:pt-25 pb-10'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-0'>
                <div>

                    <h1 className='text-[#2B2B2B] text-2xl sm:text-3xl lg:text-4xl font-bold border-b border-[#2B2B2B] pb-3 sm:pb-4'>
                        Северо-Западный Крым: Побережье первозданных смыслов
                    </h1>

                    <h2 className='text-[#2B2B2B] text-xl sm:text-2xl lg:text-3xl mt-2'>
                        Золотые пески и «молодое» море
                    </h2>

                    {/* MOBILE SWIPER */}
                    <div className="max-w-6xl mx-auto py-6 sm:py-10 lg:hidden px-2 sm:px-4">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            className="rounded-2xl"
                        >

                            <SwiperSlide>
                                <div className="bg-white/50 min-h-[520px] sm:h-[520px] p-3 sm:p-4 rounded-2xl text-[#2B2B2B] flex flex-col h-full">
                                    <img src={img4} alt="img" loading='lazy' className='w-full h-[220px] object-cover rounded-xl filter brightness-95 contrast-90 saturate-90 sepia-[0.05]' />
                                    <h1 className='text-lg sm:text-xl pt-4 text-center'>
                                        Природная здравница: Магия соленых озер
                                    </h1>
                                    <p className='text-sm sm:text-base pt-3'>
                                        Регион богат лиманами с целебными грязями и рапой, не уступающими по составу Мертвому морю. Сочетание степного разнотравья и морского бриза создает естественный ингаляторий прямо у вашего порога. Это локация, которая лечит самим своим воздухом.
                                    </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="bg-white/50 min-h-[520px] p-3 sm:p-4 rounded-2xl text-[#2B2B2B] flex flex-col h-full">
                                    <h1 className='text-lg sm:text-xl pt-4 text-center'>
                                        Заповедная тишина: Встречи с дикой природой
                                    </h1>
                                    <p className='text-sm sm:text-base pt-3'>
                                        Наши массивы граничат с уникальными природными парками. Это место, где дельфины и скаты подплывают к самому берегу, не боясь людей, а небо расцвечивают стаи редких перелетных птиц. Здесь вы живете в ритме природы, а не городского шума.
                                    </p>
                                    <img src={img5} alt="img" loading='lazy' className='w-full h-[220px] object-cover rounded-xl filter brightness-95 contrast-90 saturate-90 sepia-[0.05]' />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="bg-white/50 min-h-[520px] p-3 sm:p-4 rounded-2xl text-[#2B2B2B] flex flex-col h-full">
                                    <img src={img6} alt="img" loading='lazy' className='w-full h-[220px] object-cover rounded-xl filter brightness-95 contrast-90 saturate-90 sepia-[0.05]' />
                                    <h1 className='text-lg sm:text-xl pt-4 text-center'>
                                        Точка притяжения: Столица ветра и свободы
                                    </h1>
                                    <p className='text-sm sm:text-base pt-3'>
                                        Равнинный рельеф и стабильные термические ветра - сделали это побережье Меккой для кайтсерферов и любителей активной стихии. Лучшая площадка в стране для тех, кто ловит драйв на зеркальной глади воды. Здесь энергия спорта встречается с абсолютным спокойствием горизонта.
                                    </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="bg-white/50 min-h-[520px] p-3 sm:p-4 rounded-2xl text-[#2B2B2B] flex flex-col h-full">
                                    <img src={img7} alt="img" loading='lazy' className='w-full h-[220px] object-cover rounded-xl filter brightness-95 contrast-90 saturate-90 sepia-[0.05]' />
                                    <h1 className='text-lg sm:text-xl pt-4 text-center'>
                                        Золотые пески и «молодое» море
                                    </h1>
                                    <p className='text-sm sm:text-base pt-3'>
                                        Забудьте о гальке и резкой глубине. Здесь вас ждут бесконечные пляжи с мягким светлым песком и лазурная мелководная акватория. Вода прогревается на 2–3 недели раньше, чем на Южном берегу, оставаясь комфортной для купания до глубокой осени. Это идеальный берег для тех, кто ценит простор и тепло
                                    </p>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>

                    {/* PC / TABLET GRID */}
                    <div className="hidden lg:block max-w-6xl mx-auto mt-10 px-2 lg:px-0">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 items-stretch">

                            <div className="bg-white/50 p-3 sm:p-4 rounded-2xl text-[#2B2B2B] flex flex-col h-full">
                                <img src={img4} alt="img" loading='lazy' className='w-full h-[220px] object-cover rounded-xl filter brightness-95 contrast-90 saturate-90 sepia-[0.05]' />
                                <h1 className='text-lg sm:text-xl pt-4 text-center'>
                                    Природная здравница: Магия соленых озер
                                </h1>
                                <p className='text-sm sm:text-base pt-3'>
                                    Регион богат лиманами с целебными грязями и рапой, не уступающими по составу Мертвому морю. Сочетание степного разнотравья и морского бриза создает естественный ингаляторий прямо у вашего порога. Это локация, которая лечит самим своим воздухом.
                                </p>
                            </div>

                            <div className="bg-white/50 p-3 sm:p-4 rounded-2xl text-[#2B2B2B] flex flex-col h-full">
                                <h1 className='text-lg sm:text-xl pt-4 text-center'>
                                    Заповедная тишина: Встречи с дикой природой
                                </h1>
                                <p className='text-sm sm:text-base pt-3'>
                                    Наши массивы граничат с уникальными природными парками. Это место, где дельфины и скаты подплывают к самому берегу, не боясь людей, а небо расцвечивают стаи редких перелетных птиц. Здесь вы живете в ритме природы, а не городского шума. Можно увидеть настоящих фламинго. Поймать креветку руками или диких крабов
                                </p>
                                <img src={img5} alt="img" loading='lazy' className='w-full h-[220px] object-cover rounded-xl filter brightness-95 contrast-90 saturate-90 sepia-[0.05]' />
                            </div>

                        </div>

                        {/* hidden cards */}
                        <div
                            className={`grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 transition-all duration-700 overflow-hidden items-stretch ${open ? "max-h-[1200px] opacity-100 mt-6" : "max-h-0 opacity-0"
                                }`}
                        >

                            <div className="bg-white/50 p-3 sm:p-4 rounded-2xl text-[#2B2B2B] flex flex-col h-full">
                                <img src={img6} alt="img" loading='lazy' className='w-full h-[220px] object-cover rounded-xl filter brightness-95 contrast-90 saturate-90 sepia-[0.05]' />
                                <h1 className='text-lg sm:text-xl pt-4 text-center'>
                                    Точка притяжения: Столица ветра и свободы
                                </h1>
                                <p className='text-sm sm:text-base pt-3'>
                                    Равнинный рельеф и стабильные термические ветра сделали это побережье Меккой для кайтсерферов и висерферов и любителей активной стихии. Лучшая площадка в стране для тех, кто ловит драйв на зеркальной глади воды. Здесь энергия спорта встречается с абсолютным спокойствием горизонта.
                                </p>
                            </div>

                            <div className="bg-white/50 p-3 sm:p-4 rounded-2xl text-[#2B2B2B] flex flex-col h-full">
                                <img src={img7} alt="img" loading='lazy' className='w-full h-[220px] object-cover rounded-xl filter brightness-95 contrast-90 saturate-90 sepia-[0.05]' />
                                <h1 className='text-lg sm:text-xl pt-4 text-center'>
                                    Золотые пески и «молодое» море
                                </h1>
                                <p className='text-sm sm:text-base pt-3'>
                                    Забудьте о гальке и резкой глубине. Здесь вас ждут бесконечные пляжи с мягким светлым песком и лазурная мелководная акватория. Вода прогревается на 2–3 недели раньше, чем на Южном берегу, оставаясь комфортной для купания до глубокой осени. Это идеальный берег для тех, кто ценит простор и тепло. Лучший берег крыма для отдыха с детьми
                                </p>
                            </div>

                        </div>

                        {/* BUTTON */}
                        <div className="flex justify-center mt-6 sm:mt-8">
                            <button
                                onClick={() => setOpen(!open)}
                                className="px-5 sm:px-6 py-2 sm:py-3 bg-[#29494C] text-white rounded-3xl shadow"
                            >
                                {open ? "Свернуть" : "Показать ещё"}
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Benefits