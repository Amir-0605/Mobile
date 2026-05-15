import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function Reviews() {
    const { slug } = useParams();
    return (
        <div className="bg-[linear-gradient(90deg,#FFFFFF_0%,#99999999_100%)]">
            <div className="container">

                <h1 className="text-xl text-[#29494C] border-b-1 pb-4 pl-5 mb-5 pt-3">
                    Отзывы наших клиентов
                </h1>

                {/* MOBILE / TABLET SWIPER */}
                <div className="lg:hidden">
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
                            <div className="h-[400px] ml-5 w-[320px] border bg-white/50 rounded-2xl flex items-center justify-center">
                                <img src="" alt="img" loading="lazy"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="h-[400px] ml-5 mr-5 border bg-white/50 rounded-2xl flex items-center justify-center">
                                <img src="" alt="img" loading="lazy"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="h-[400px] ml-5 mr-5 border bg-white/50 rounded-2xl flex items-center justify-center">
                                <img src="" alt="img" loading="lazy"/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* DESKTOP GRID (SWIPER HIDDEN ON PC) */}
                <div className="hidden lg:flex gap-6 px-10 pb-10 justify-center">

                    <div className="h-[400px] w-[320px] border bg-white/50 rounded-2xl flex items-center justify-center">
                        <img src="" alt="img" />
                    </div>

                    <div className="h-[400px] w-[320px] border bg-white/50 rounded-2xl flex items-center justify-center">
                        <img src="" alt="img" />
                    </div>

                    <div className="h-[400px] w-[320px] border bg-white/50 rounded-2xl flex items-center justify-center">
                        <img src="" alt="img" />
                    </div>

                </div>
            </div>
        </div>
    );
}