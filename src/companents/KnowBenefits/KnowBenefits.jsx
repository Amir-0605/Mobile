import { CiCircleChevLeft } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect } from "react";
import "swiper/css";
import { FiCalendar, FiCheckCircle, FiEdit3 } from 'react-icons/fi';
import { FaTrophy } from 'react-icons/fa';

const KnowBenefits = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='bg-[linear-gradient(90deg,#FFFFFF_0%,#99999999_100%)] pt-10 md:pt-14 lg:pt-20 overflow-hidden'>
            <div className='container mx-auto px-4 md:px-6 lg:px-10'>

                <Link to={'/'}>
                    <CiCircleChevLeft className="text-[#29494C] text-2xl md:text-3xl lg:text-4xl" />
                </Link>

                <div className='pb-10 md:pb-16 lg:pb-20'>

                    <div>
                        <h1 className='font-bold border-b pb-3 text-[#29494C] text-xl md:text-2xl lg:text-3xl pt-4 leading-snug'>
                            Инвестиции в землю Крыма
                        </h1>

                        <p className='text-sm md:text-base text-[#29494C] lg:text-lg pt-4 leading-relaxed'>
                            Земля в Северо-Западном Крыму — это актив с самым высоким темпом роста стоимости на полуострове.
                        </p>

                        <p className='text-sm md:text-base text-[#29494C] lg:text-lg pb-4 leading-relaxed'>
                            Южный берег уже перенасыщен и застроен, в то время как основные инвестиции сейчас направлены на западное побережье.
                        </p>
                    </div>

                    <div className='border-b pb-10 border-[#29494C]'>

                        <div className='rounded-xl bg-white/50 p-4 md:p-6 mb-4'>
                            <h1 className='text-lg md:text-xl lg:text-2xl text-[#29494C] font-bold'>
                                — Вектор развития:
                            </h1>
                            <p className='text-sm md:text-base lg:text-lg text-[#29494C] mt-4 leading-relaxed'>
                                Основные государственные и частные инвестиции сейчас направлены на освоение западного побережья — новые дороги, сети и туристические кластеры
                            </p>
                        </div>

                        <div className='rounded-xl bg-white/50 p-4 md:p-6 mb-4'>
                            <h1 className='text-lg md:text-xl lg:text-2xl text-[#29494C] font-bold'>
                                — Рост на этапах:
                            </h1>
                            <p className='text-sm md:text-base lg:text-lg text-[#29494C] mt-4 leading-relaxed'>
                                Стоимость сотки совершает рывок на каждом этапе развития территории: от межевания массива до подвода первых коммуникаций. Заходя в проект на старте, вы забираете эту маржу себе
                            </p>
                        </div>

                        <div className='rounded-xl bg-white/50 p-4 md:p-6'>
                            <h1 className='text-lg md:text-xl lg:text-2xl text-[#29494C] font-bold'>
                                — Прогнозируемая ликвидность:
                            </h1>
                            <p className='text-sm md:text-base lg:text-lg text-[#29494C] mt-4 leading-relaxed'>
                                Спрос на участки у моря стабильно превышает предложение. Это актив, который легко превратить в кеш или прибыльный арендный бизнес в любой момент
                            </p>
                        </div>

                    </div>
                </div>

                <div className='pb-10'>
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
                    >

                        <SwiperSlide>
                            <div className="min-h-[350px] md:min-h-[400px] lg:min-h-[450px] w-full p-5 text-[#29494C] border bg-white/50 rounded-2xl flex flex-col gap-5">
                                <p className='text-lg md:text-xl'>370 000 р</p>

                                <div className='text-sm md:text-base lg:text-lg leading-relaxed'>
                                    <p className='font-bold mb-2'>Вход «в нуле»</p>
                                    Цена за 6 соток на старте освоения массива. Ваша точка входа до того, как в локацию придет основная инфраструктура. Минимальный порог для кратного роста.
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="min-h-[350px] md:min-h-[400px] lg:min-h-[450px] border bg-white/50 rounded-2xl flex flex-col gap-5 p-5 text-[#29494C] w-full">
                                <p className='text-lg md:text-xl'>x10 – x20</p>

                                <div className='text-sm md:text-base lg:text-lg leading-relaxed'>
                                    <p className='font-bold mb-2'>Целевой множитель</p>
                                    Прогноз роста стоимости на горизонте 5–7 лет при реализации планов КРТ и превращении берега в новый курортный кластер. Ваш актив растет вместе с каждым отелем по соседству.
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="min-h-[350px] md:min-h-[400px] lg:min-h-[450px] border bg-white/50 rounded-2xl flex flex-col gap-5 p-5 text-[#29494C] w-full">
                                <p className='text-lg md:text-xl'>до 2,5 км</p>

                                <div className='text-sm md:text-base lg:text-lg leading-relaxed'>
                                    <p className='font-bold mb-2'>Близость к морю</p>
                                    Все наши массивы расположены в зоне прямой доступности от лучших песчаных пляжей и лазурных кос региона. Новой земли у воды больше не появится — это физически ограниченный ресурс.
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>

                <div>
                    <h1 className='font-bold border-b pb-4 text-[#29494C] text-xl md:text-2xl lg:text-3xl pt-4 leading-snug'>
                        Мы не просто продаем землю — мы развиваем территорию Северо-Западного Крыма, владея крупнейшим земельным банком в регионе.
                    </h1>

                    <div className='rounded-xl bg-white/50 p-4 md:p-6 mb-4 mt-5'>
                        <span className='text-sm md:text-base text-[#29494C] lg:text-lg leading-relaxed block'>
                            <p className='font-bold mb-2'>— Прямой ресурс:</p>
                            В нашем управлении находятся тысячи гектар на побережье. Это позволяет нам предлагать лучшие локации напрямую, без скрытых комиссий.
                        </span>
                    </div>

                    <div className='rounded-xl bg-white/50 p-4 md:p-6 mb-4'>
                        <span className='text-sm md:text-base text-[#29494C] lg:text-lg leading-relaxed block'>
                            <p className='font-bold mb-2'>— Опыт в цифрах:</p>
                            Более 5 лет на рынке земельных активов. Мы знаем каждый метр побережья, историю его владения и градостроительный потенциал.
                        </span>
                    </div>

                    <div className='rounded-xl bg-white/50 p-4 md:p-6 mb-4'>
                        <span className='text-sm md:text-base text-[#29494C] lg:text-lg leading-relaxed block'>
                            <p className='font-bold mb-2'>— Полное документальное сопровождение:</p>
                            Мы берем на себя формирование участков и подготовку пакета документов для перехода права собственности.
                        </span>
                    </div>

                    <div className='rounded-xl bg-white/50 p-4 md:p-6 mb-4'>
                        <span className='text-sm md:text-base text-[#29494C] lg:text-lg leading-relaxed block'>
                            <p className='font-bold mb-2'>— Управление развитием:</p>
                            Для проектных массивов мы берем на себя административный цикл: от перевода в нужную категорию использования до помощи с сетями. Вы не остаетесь один на один с «голым полем» — мы ведем проект до полной готовности территории к освоению.
                        </span>
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>

                    <div className='rounded-xl p-4 bg-white/50 flex flex-col gap-3'>
                        <FiCheckCircle className='text-green-500 text-2xl' />
                        <p className='text-[#29494C] text-sm md:text-base leading-relaxed'>
                            Подбираем участок под ваш бюджет и задачи.
                        </p>
                    </div>

                    <div className='rounded-xl p-4 bg-white/50 flex flex-col gap-3'>
                        <FiCalendar className='text-2xl text-[#29494C]' />
                        <p className='text-[#29494C] text-sm md:text-base leading-relaxed'>
                            Фиксируем цену и объект за вами, составляем договор.
                        </p>
                    </div>

                    <div className='rounded-xl p-4 bg-white/50 flex flex-col gap-3'>
                        <FiEdit3 className='text-2xl text-[#29494C]' />
                        <p className='text-[#29494C] text-sm md:text-base leading-relaxed'>
                            Дистанционная или личная подача документов в МФЦ.
                        </p>
                    </div>

                    <div className='rounded-xl p-4 bg-white/50 flex flex-col gap-3'>
                        <FaTrophy className='text-2xl text-[#29494C]' />
                        <p className='text-[#29494C] text-sm md:text-base leading-relaxed'>
                            Получение выписки из ЕГРН.
                        </p>
                    </div>

                </div>

                <div className='flex justify-center p-4 mt-8 md:mt-12 lg:mt-16'>
                    <Link
                        to={"/filter"}
                        className='border rounded-3xl shadow-[0_4px_20px_#00000040] border-[#FFFFFF33] bg-[#28727AB2] text-[#FFFFFF] px-6 py-4 md:px-8 md:py-5 text-sm md:text-base lg:text-lg text-center'
                    >
                        Подобрать участок
                    </Link>
                </div>

            </div>
        </div >
    )
}

export default KnowBenefits