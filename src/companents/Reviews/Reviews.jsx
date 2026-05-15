import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Reviews() {
    return (
        <div className="bg-[linear-gradient(90deg,#FFFFFF_0%,#99999999_100%)]">
            <h1 className="text-xl text-[#29494C] border-b-1 pb-4 pl-5 mb-5 pt-3">Часто задаваемые вопросы</h1>
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
                    <div className="h-[400px] ml-5 w-[320px] border bg-white/50 rounded-2xl flex items-center justify-center">
                        <img src="" alt="img" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-[400px] ml-5 mr-5 border bg-white/50 rounded-2xl flex items-center justify-center">
                        <img src="" alt="img" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-[400px] ml-5 mr-5 border bg-white/50 rounded-2xl flex items-center justify-center">
                        <img src="" alt="img" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}