import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import logo from "../assets/logo.png";

export default function MobileFirstLayout() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeImg, setActiveImg] = useState(null);
    const [open, setOpen] = useState(false);

    const swiperRef = useRef(null);

    const images = [img1, img2, img3];

    useEffect(() => {
        images.forEach((img) => {
            const image = new Image();
            image.src = img;
        });
    }, []);

    return (
        <div className="absolute inset-0 min-h-screen w-full bg-transparent text-white overflow-hidden">

            {/* HEADER */}
            <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 backdrop-blur-md bg-white/10">
                <div className="mx-auto flex h-[70px] max-w-[1400px] items-center justify-between px-4 md:px-6 lg:px-10">
                    <img src={logo} alt="logo" className="h-18 w-auto object-contain" />

                    <button
                        onClick={() => setMenuOpen(true)}
                        className="flex items-center justify-center lg:hidden"
                    >
                        <FiMenu size={28} />
                    </button>
                </div>
            </header>

            {/* MENU */}
            {menuOpen && (
                <>
                    <div
                        onClick={() => setMenuOpen(false)}
                        className="fixed inset-0 z-[90] bg-black/60"
                    />

                    <div className="fixed top-0 right-0 z-[100] h-screen w-[85%] max-w-[320px] bg-white text-black shadow-2xl">
                        <div className="flex items-center justify-between border-b p-5">
                            <h2 className="text-xl font-semibold">Menu</h2>
                            <button onClick={() => setMenuOpen(false)}>
                                <FiX size={28} />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-5 p-5 text-lg">
                            <Link to="/filter">Фильтры</Link>
                        </nav>
                    </div>
                </>
            )}

            {/* MAIN */}
            <main className="mx-auto max-w-[1400px] px-4 pb-28 pt-20 md:px-6 lg:px-10">

                <section>
                    <h1 className="mb-6 text-3xl font-bold md:text-5xl">
                        Каталог
                    </h1>

                    {/* SWIPER WRAPPER */}
                    <div className="relative w-full px-2 md:px-6">

                        {/* LEFT */}
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow"
                        >
                            ←
                        </button>

                        {/* RIGHT */}
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow"
                        >
                            →
                        </button>

                        <Swiper
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            slidesPerView={1}
                            centeredSlides={true}
                            spaceBetween={80}
                            className="w-full !overflow-visible z-0"
                        >
                            {images.map((img, i) => (
                                <SwiperSlide
                                    key={i}
                                    className="!w-[280px] sm:!w-[420px] ml-15 lg:!w-[600px]"
                                >
                                    <div
                                        onClick={() => setActiveImg(i)}
                                        className="overflow-hidden rounded-3xl bg-white/5 border border-white/10 cursor-pointer"
                                    >
                                        <img
                                            src={img}
                                            alt="img"
                                            className="block h-[260px] sm:h-[380px] lg:h-[500px] w-full object-cover"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
            </main>

            {/* LIGHTBOX */}
            {activeImg !== null && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black p-4">

                    <button
                        onClick={() => setActiveImg(null)}
                        className="absolute right-4 top-4 text-3xl bg-white/10 rounded-full w-12 h-12"
                    >
                        ×
                    </button>

                    <img
                        src={images[activeImg]}
                        className="max-h-[85vh] max-w-[95vw] rounded-3xl object-contain"
                        alt=""
                    />
                </div>
            )}

            {/* CALL */}
            <div className="fixed bottom-4 left-0 right-0 z-40 flex justify-center px-4">
                <button
                    onClick={() => setOpen(true)}
                    className="flex h-[56px] w-full max-w-[420px] items-center justify-center gap-2 rounded-full bg-white text-black shadow-xl"
                >
                    <FiPhone size={18} />
                    Позвонить
                </button>
            </div>

            {/* MODAL */}
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
    );
}