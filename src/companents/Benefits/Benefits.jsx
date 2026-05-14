import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
const Benefits = () => {
    return (
        <div className='bg-[linear-gradient(45deg,#FFFFFF_0%,#99999999_100%)] pt-5 pb-10'>
            <div className='container'>
                <div>
                    <h1 className='text-[#29494C] text-xl font-600 border-b-1 pb-4 border-[#29494C]'>Преимущества природы Крыма</h1>
                    <h2 className='text-[#29494C] text-base font-400 pt-3'>Северо-Западный Крым: Побережье первозданных смыслов</h2>


                    <div className="max-w-6xl mx-auto py-10">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            // autoplay={{ delay: 3000 }}
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
                                <div className="bg-white/50 h-[550px] p-3 rounded-2xl text-[#29494C] text-3xl font-bold">
                                    <img src="/src/assets/87414622052e724942a0fb0844a1420e74dac04b.png" alt="img" />
                                    <h1 className='text-xl pt-4 text-center'>Природная здравница:
                                        Магия соленых озер</h1>
                                    <p className='text-base pt-4'>Регион богат лиманами с целебными грязями и рапой, не уступающими по составу Мертвому морю. Сочетание степного разнотравья и морского бриза создает естественный ингаляторий прямо у вашего порога. Это локация, которая лечит самим своим воздухом.</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="bg-white/50 h-[550px] p-3 rounded-2xl text-[#29494C] text-3xl font-bold">
                                    <h1 className='text-xl pt-4 text-center'>Заповедная тишина:
                                        Встречи с дикой природой</h1>
                                    <p className='text-base pt-4'>Наши массивы граничат с уникальными природными парками. Это место, где дельфины и скаты подплывают к самому берегу, не боясь людей, а небо расцвечивают стаи редких перелетных птиц. Здесь вы живете в ритме природы, а не городского шума.</p>
                                    <img src="/src/assets/4e1476aaf37c97243b49abbce20b000e28a1c44e.png" alt="img" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-white/50 h-[550px] p-3 rounded-2xl text-[#29494C] text-3xl font-bold">
                                    <img src="/src/assets/8603f95cf55c95cf130c97e92b87fbbb0401e361.jpg" alt="img" />
                                    <h1 className='text-xl pt-4 text-center'>Точка притяжения:
                                        Столица ветра и свободы</h1>
                                    <p className='text-base pt-4'>Равнинный рельеф и стабильные термические ветра - сделали это побережье Меккой для кайтсерферов и любителей активной стихии. Лучшая площадка в стране для тех, кто ловит драйв на зеркальной глади воды. Здесь энергия спорта встречается с абсолютным спокойствием горизонта.
                                    </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="bg-white/50 h-[550px] p-3 rounded-2xl text-[#29494C] text-3xl font-bold">
                                    <h1 className='text-xl pt-4 text-center'>Золотые пески и «молодое» море</h1>
                                    <p className='text-base pt-4'>Забудьте о гальке и резкой глубине. Здесь вас ждут бесконечные пляжи с мягким светлым песком и лазурная мелководная акватория. Вода прогревается на 2–3 недели раньше, чем на Южном берегу, оставаясь комфортной для купания до глубокой осени. Это идеальный берег для тех, кто ценит простор и тепло</p>
                                    <img src="/src/assets/25dcc469cbf7985d8324ff81b2f4f07b637698f5.png" alt="img" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Benefits