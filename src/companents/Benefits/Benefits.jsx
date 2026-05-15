import { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img4 from "../assets/img4.webp"
import img5 from "../assets/img5.webp"
import img6 from "../assets/img6.webp"
import img7 from "../assets/img7.webp"

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Benefits = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='bg-[linear-gradient(45deg,#FFFFFF_0%,#99999999_100%)] pt-25 pb-10'>
            <div className='container'>
                <div>

                    <h1 className='text-[#29494C] text-xl font-600 border-b-1 pb-4 border-[#29494C]'>
                        Преимущества природы Крыма
                    </h1>

                    <h2 className='text-[#29494C] text-base font-400 pt-3'>
                        Северо-Западный Крым: Побережье первозданных смыслов
                    </h2>

                    {/* MOBILE SWIPER */}
                    <div className="max-w-6xl mx-auto py-10 lg:hidden">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            className="rounded-2xl"
                        >

                            <SwiperSlide>
                                <div className="bg-white/50 h-[550px] p-3 rounded-2xl text-[#29494C]">
                                    <img src={img4} alt="img" loading='lazy'/>
                                    <h1 className='text-xl pt-4 text-center'>
                                        Природная здравница: Магия соленых озер
                                    </h1>
                                    <p className='text-base pt-4'>
                                        Регион богат лиманами с целебными грязями и рапой, не уступающими по составу Мертвому морю. Сочетание степного разнотравья и морского бриза создает естественный ингаляторий прямо у вашего порога. Это локация, которая лечит самим своим воздухом.
                                    </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="bg-white/50 h-[550px] p-3 rounded-2xl text-[#29494C]">
                                    <h1 className='text-xl pt-4 text-center'>
                                        Заповедная тишина: Встречи с дикой природой
                                    </h1>
                                    <p className='text-base pt-4'>
                                        Наши массивы граничат с уникальными природными парками. Это место, где дельфины и скаты подплывают к самому берегу, не боясь людей, а небо расцвечивают стаи редких перелетных птиц. Здесь вы живете в ритме природы, а не городского шума.
                                    </p>
                                    <img src={img5} alt="img" loading='lazy'/>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="bg-white/50 min-h-[550px] p-3 rounded-2xl text-[#29494C]">
                                    <img src={img6} alt="img" loading='lazy'/>
                                    <h1 className='text-xl pt-4 text-center'>
                                        Точка притяжения: Столица ветра и свободы
                                    </h1>
                                    <p className='text-base pt-4'>
                                        Равнинный рельеф и стабильные термические ветра - сделали это побережье Меккой для кайтсерферов и любителей активной стихии. Лучшая площадка в стране для тех, кто ловит драйв на зеркальной глади воды. Здесь энергия спорта встречается с абсолютным спокойствием горизонта.
                                    </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="bg-white/50 h-[550px] p-3 rounded-2xl text-[#29494C]">
                                    <h1 className='text-xl pt-4 text-center'>
                                        Золотые пески и «молодое» море
                                    </h1>
                                    <p className='text-base pt-4'>
                                        Забудьте о гальке и резкой глубине. Здесь вас ждут бесконечные пляжи с мягким светлым песком и лазурная мелководная акватория. Вода прогревается на 2–3 недели раньше, чем на Южном берегу, оставаясь комфортной для купания до глубокой осени. Это идеальный берег для тех, кто ценит простор и тепло
                                    </p>
                                    <img src={img7} alt="img" loading='lazy'/>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>

                    {/* PC GRID */}
                    <div className="hidden lg:block max-w-6xl mx-auto mt-10">

                        {/* ALWAYS VISIBLE 2 CARDS */}
                        <div className="grid grid-cols-2 gap-6">

                            <div className="bg-white/50 p-3 rounded-2xl text-[#29494C]">
                                <img src={img4} alt="img" loading='lazy'/>
                                <h1 className='text-xl pt-4 text-center'>
                                    Природная здравница: Магия соленых озер
                                </h1>
                                <p className='text-base pt-4'>
                                    Регион богат лиманами с целебными грязями и рапой, не уступающими по составу Мертвому морю. Сочетание степного разнотравья и морского бриза создает естественный ингаляторий прямо у вашего порога. Это локация, которая лечит самим своим воздухом.
                                </p>
                            </div>

                            <div className="bg-white/50 p-3 rounded-2xl text-[#29494C]">
                                <h1 className='text-xl pt-4 text-center'>
                                    Заповедная тишина: Встречи с дикой природой
                                </h1>
                                <p className='text-base pt-4'>
                                    Наши массивы граничат с уникальными природными парками. Это место, где дельфины и скаты подплывают к самому берегу, не боясь людей, а небо расцвечивают стаи редких перелетных птиц. Здесь вы живете в ритме природы, а не городского шума.
                                </p>
                                <img src={img5} alt="img" loading='lazy'/>
                            </div>

                        </div>

                        {/* HIDDEN 2 CARDS */}
                        <div
                            className={`grid grid-cols-2 gap-6 transition-all duration-700 overflow-hidden ${open ? "max-h-[1000px] opacity-100 mt-6" : "max-h-0 opacity-0"
                                }`}
                        >

                            <div className="bg-white/50 p-3 rounded-2xl text-[#29494C]">
                                <img src={img6} alt="img" loading='lazy'/>
                                <h1 className='text-xl pt-4 text-center'>
                                    Точка притяжения: Столица ветра и свободы
                                </h1>
                                <p className='text-base pt-4'>
                                    Равнинный рельеф и стабильные термические ветра - сделали это побережье Меккой для кайтсерферов и любителей активной стихии. Лучшая площадка в стране для тех, кто ловит драйв на зеркальной глади воды. Здесь энергия спорта встречается с абсолютным спокойствием горизонта.

                                </p>
                            </div>

                            <div className="bg-white/50 p-3 rounded-2xl text-[#29494C]">
                                <h1 className='text-xl pt-4 text-center'>
                                    Золотые пески и «молодое» море
                                </h1>
                                <p className='text-base pt-4'>
                                    Забудьте о гальке и резкой глубине. Здесь вас ждут бесконечные пляжи с мягким светлым песком и лазурная мелководная акватория. Вода прогревается на 2–3 недели раньше, чем на Южном берегу, оставаясь комфортной для купания до глубокой осени. Это идеальный берег для тех, кто ценит простор и тепло
                                </p>
                                <img src={img7} alt="img" loading='lazy'/>
                            </div>

                        </div>

                        {/* BUTTON AT BOTTOM */}
                        <div className="flex justify-center mt-8">
                            <button
                                onClick={() => setOpen(!open)}
                                className="px-6 py-3 bg-[#29494C] text-white rounded-3xl shadow cursor-pointer"
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