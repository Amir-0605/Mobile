import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

import img1 from "../assets/img1.webp"
import img2 from "../assets/img2.webp"
import img3 from "../assets/img3.webp"
import img11 from "../assets/img11.webp"
import logo from "../assets/logo.png"
import { FaPhoneAlt } from "react-icons/fa";

export default function MobileFirstLayout() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeImg, setActiveImg] = useState(null);
    const [open, setOpen] = useState(false);

    const swiperRef = useRef(null);

    const images = [img1, img2, img3, img11];

    useEffect(() => {
        images.forEach((img) => {
            const image = new Image();
            image.src = img;
        });
    }, [images]);

    return (
        <div className="absolute inset-0 h-380 pt-190 w-full bg-transparent text-white overflow-hidden lg:px-10 lg:mx-auto">

            {/* HEADER */}
            <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 backdrop-blur-md bg-white/10">
                <div className="mx-auto flex h-[70px] max-w-[1400px] items-center justify-between px-4 md:px-6 lg:px-10">
                    <img src={logo} alt="logo" className="h-15 w-auto object-cover lg:h-15 lg:w-35 object-cover filter brightness-95 contrast-90 saturate-90 sepia-[0.05]" />

                    <div className="flex gap-10 items-center">
                        <Link to={'/filter'} className="text-3xl lg:block hidden">Каталог</Link>
                        <div onClick={() => setOpen(true)} className="flex cursor-pointer items-center gap-4">
                        <FaPhoneAlt className="text-xl"/>
                            <p className="hiddenlg:block lg:text-3xl">
                                7-(978)995-75-05
                            </p>
                        </div>
                    </div>

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
                            <Link to="/filter" className="lg:hidden">Каталог</Link>
                        </nav>
                    </div>
                </>
            )}

            {/* MAIN */}
            <main className="mx-auto max-w-[1400px] px-4 pb-28 pt-30 md:px-6 lg:px-10">

                <section>

                    {/* SWIPER WRAPPER */}
                    <div className="relative w-full px-2 md:px-6 lg:px-10">

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
                            spaceBetween={240}
                            className="w-70 lg:w-150 pt-100"
                        >
                            {images.map((img, i) => (
                                <SwiperSlide
                                    key={i}
                                    className="!w-[280px] sm:!w-[420px] lg:!w-[600px]"
                                >
                                    <div
                                        onClick={() => setActiveImg(i)}
                                        className="overflow-hidden rounded-3xl bg-white/5 border border-white/10 cursor-pointer"
                                    >
                                        <img
                                            src={img}
                                            alt="img"
                                            className="block h-[260px] sm:h-[380px] lg:h-[500px] w-full object-cover filter brightness-95 contrast-90 saturate-90 sepia-[0.05]"
                                            loading="lazy"
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
                        className="max-h-[85vh] max-w-[95vw] rounded-3xl object-contain filter brightness-95 contrast-90 saturate-90 sepia-[0.05]"
                        alt="img"
                        loading="lazy"
                    />
                </div>
            )}

            {/* CALL */}
            <div className="fixed bottom-4 left-0 right-0 z-40 flex justify-center px-4 lg:bottom-6">
                <button
                    onClick={() => setOpen(true)}
                    className="flex h-[56px] w-full max-w-[420px] lg:max-w-[500px] items-center justify-center gap-2 rounded-full bg-white text-black shadow-xl"
                >
                    <FiPhone size={18} />
                    Позвонить
                </button>
            </div>

            {/* MODAL */}
            {open && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-3 sm:p-4 backdrop-blur-sm">

                    <div className="relative w-full max-w-[95%] sm:max-w-2xl lg:max-w-4xl rounded-2xl sm:rounded-[32px] bg-[#111] p-4 sm:p-6 md:p-10 text-white">

                        {/* крестик */}
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute right-3 top-3 sm:right-5 sm:top-5 text-3xl sm:text-4xl md:text-5xl leading-none"
                        >
                            ×
                        </button>

                        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4">
                            Оставьте заявку на консультацию
                        </h1>

                        <p className="mb-6 sm:mb-8 text-sm sm:text-base text-white/70">
                            Наш менеджер свяжется с вами для уточнения всех деталей и подбора идеального варианта
                        </p>

                        {/* form */}
                        <div className="flex flex-col gap-4 sm:gap-5">

                            {/* имя */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs sm:text-sm text-white/70">Имя</label>
                                <input
                                    placeholder="Введите имя"
                                    className="w-full h-[48px] sm:h-[55px] md:h-[60px] px-3 sm:px-4 rounded-xl bg-white/10 border border-white/20 text-white outline-none"
                                />
                            </div>

                            {/* телефон */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs sm:text-sm text-white/70">Телефон</label>
                                <input
                                    placeholder="+7 (000) 000 00 00"
                                    className="w-full h-[48px] sm:h-[55px] md:h-[60px] px-3 sm:px-4 rounded-xl bg-white/10 border border-white/20 text-white outline-none"
                                />
                            </div>

                            {/* чекбокс (ИСПРАВЛЕН) */}
                            <label className="flex items-start gap-3 text-xs sm:text-sm text-white">

                                <input
                                    type="checkbox"
                                    className="w-5 h-5 accent-[#F6FFD7] mt-1 sm:mt-0"
                                />

                                <span className="leading-snug">
                                    Согласен на обработку персональных данных
                                </span>

                            </label>

                            {/* кнопка */}
                            <button className="h-[52px] sm:h-[60px] md:h-[70px] w-full rounded-2xl bg-[#F6FFD7] text-black text-base sm:text-lg md:text-xl">
                                Перезвоните мне
                            </button>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}