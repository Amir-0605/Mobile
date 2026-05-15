import { CiCircleChevLeft } from 'react-icons/ci'
import { Link, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";

const KnowBenefits = () => {
    const { slug } = useParams();
    return (
        <div className='bg-[linear-gradient(90deg,#FFFFFF_0%,#99999999_100%)] pt-10'>
            <div className='container'>
                <Link to={'/'}><CiCircleChevLeft className="text-[#29494C]" /></Link>
                <div className='pb-10'>
                    <div>
                        <h1 className='text-bold border-b-1 pb-3 text-xl pt-4'>Инвестиции в землю Крыма</h1>
                        <p className='text-sm pt-4'>Земля в Северо-Западном Крыму — это актив с самым высоким темпом роста стоимости на полуострове.</p> <br />
                        <p className='text-sm pb-4'>Южный берег уже перенасыщен и застроен, в то время как основные инвестиции сейчас направлены на западное побережье.</p>
                    </div>
                    <div className='border-b-1 pb-10 border-[#29494C]'>
                        <div className='rounded-xl bg-white/50 p-3 mb-4'>
                            <h1 className='text-xl text-[#29494C] text-bold'>Вектор развития</h1>
                            <p className='text-sm text-[#29494C] mt-4'>Основные государственные и частные инвестиции сейчас направлены на освоение западного побережья — новые дороги, сети и туристические кластеры</p>
                        </div>
                        <div className='rounded-xl bg-white/50 p-3 mb-4'>
                            <h1 className='text-xl text-[#29494C] text-bold'>Рост на этапах</h1>
                            <p className='text-sm text-[#29494C] mt-4'>Стоимость сотки совершает рывок на каждом этапе развития территории: от межевания массива до подвода первых коммуникаций. Заходя в проект на старте, вы забираете эту маржу себе</p>
                        </div>
                        <div className='rounded-xl bg-white/50 p-3'>
                            <h1 className='text-xl text-[#29494C] text-bold'>Ликвидность</h1>
                            <p className='text-sm text-[#29494C] mt-4'>Спрос на участки у моря стабильно превышает предложение. Это актив, который легко превратить в кеш или прибыльный арендный бизнес в любой момент</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        // autoplay={{ delay: 3000 }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        <SwiperSlide>
                            <div className="h-[400px] ml-5 w-[250px] p-5 text-[#29494C] border bg-white/50 rounded-2xl flex flex-col gap-5">
                                <p className='text-xl'>370 000 р</p>
                                <p className='text-lg'>Вход «в нуле» Цена за 6 соток на старте освоения массива. Ваша точка входа до того, как в локацию придет основная инфраструктура. Минимальный порог для кратного роста.</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="h-[400px] ml-5 mr-5 border bg-white/50 rounded-2xl flex flex-col gap-5 p-5 text-[#29494C]">
                                <p className='text-xl'>x10 – x20</p>
                                <p className='text-lg'>Целевой множитель Прогноз роста стоимости на горизонте 5–7 лет при реализации планов КРТ и превращении берега в новый курортный кластер. Ваш актив растет вместе с каждым отелем по соседству.</p>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="h-[400px] ml-5 mr-5 border bg-white/50 rounded-2xl flex flex-col gap-5 p-5 text-[#29494C]">
                                <p className='text-xl'>до 2,5 км</p>
                                <p className='text-lg'>Близость к морю Все наши массивы расположены в зоне прямой доступности от лучших песчаных пляжей и лазурных кос региона. Новой земли у воды больше не появится — это физически ограниченный ресурс.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='flex justify-center p-4 mt-5'>
                    <Link to={"/filter"} className='border rounded-3xl shadow-[0_4px_20px_shadow-[0_4px_20px_#00000040]] border-[#FFFFFF33] bg-[#28727AB2] text-[#FFFFFF] p-5'>Подобрать участок</Link>
                </div>
            </div>
        </div>
    )
}

export default KnowBenefits