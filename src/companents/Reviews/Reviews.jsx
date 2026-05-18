import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect } from "react";

export default function Reviews() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="bg-[linear-gradient(90deg,#FFFFFF_0%,#99999999_100%)] py-5 md:py-10 lg:py-14">
            <div className="container px-4 md:px-8 lg:px-16">

                <h1 className="text-2xl font-bold md:text-2xl lg:text-3xl text-[#29494C] border-b pb-4 pl-5 mb-5 pt-3">
                    Отзывы наших клиентов
                </h1>

                {/* MOBILE / TABLET SWIPER */}
                <div className="lg:hidden overflow-hidden">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 2 },
                        }}
                        className="px-1"
                    >
                        <SwiperSlide>
                            <div className="h-[320px] md:h-[380px] w-full border bg-white/50 rounded-2xl flex items-center justify-center">
                                <img src="" alt="img" loading="lazy" className="filter brightness-95 contrast-90 saturate-90 sepia-[0.05]"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="h-[320px] md:h-[380px] w-full border bg-white/50 rounded-2xl flex items-center justify-center">
                                <img src="" alt="img" loading="lazy" className="filter brightness-95 contrast-90 saturate-90 sepia-[0.05]"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="h-[320px] md:h-[380px] w-full border bg-white/50 rounded-2xl flex items-center justify-center">
                                <img src="" alt="img" loading="lazy" className="filter brightness-95 contrast-90 saturate-90 sepia-[0.05]"/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* DESKTOP GRID */}
                <div className="hidden lg:flex gap-6 px-10 pb-10 justify-center">

                    <div className="h-[400px] xl:h-[450px] w-[320px] xl:w-[360px] border bg-white/50 rounded-2xl flex items-center justify-center">
                        <img src="" alt="img" className="filter brightness-95 contrast-90 saturate-90 sepia-[0.05]"/>
                    </div>

                    <div className="h-[400px] xl:h-[450px] w-[320px] xl:w-[360px] border bg-white/50 rounded-2xl flex items-center justify-center">
                        <img src="" alt="img" className="filter brightness-95 contrast-90 saturate-90 sepia-[0.05]"/>
                    </div>

                    <div className="h-[400px] xl:h-[450px] w-[320px] xl:w-[360px] border bg-white/50 rounded-2xl flex items-center justify-center">
                        <img src="" alt="img" className="filter brightness-95 contrast-90 saturate-90 sepia-[0.05]"/>
                    </div>

                </div>
            </div>
        </div>
    );
}