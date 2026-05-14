import { useRef, useState } from "react";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

export default function MobileFirstLayout() {
    const [menuOpen, setMenuOpen] = useState(false);
    const swiperRef = useRef(null);
    const [activeImg, setActiveImg] = useState(null);
    const [open, setOpen] = useState(false);
    const images = [
        "/6919b57f96876f787637a902ea4e5888eb47ebb1.jpg",
        "/0875dc54c11d9b0b821bd39a6a3b7a54ba7078a5.jpg",
        "/f0e966385a21578dcc918f70ccdeb7332aa05f69.jpg",
    ];

    return (
        <div className="bg-white text-black">

            {/* HEADER */}
            <header className="fixed left-0 right-0 top-0 z-40 border-b backdrop-blur">
                <div className="container mx-auto flex items-center justify-between lg:px-10 py-4">
                    <img src="/src/assets/logo.png" alt="logo" className="w-20 h-5" />

                    <button onClick={() => setMenuOpen(true)} className="lg:hidden">
                        <FiMenu className="text-white" size={28} />
                    </button>
                </div>
            </header>

            {/* BURGER MENU */}
            {menuOpen && (
                <>
                    <div
                        onClick={() => setMenuOpen(false)}
                        className="fixed inset-0 z-[9998] bg-black/40"
                    />

                    <div className="fixed top-0 right-0 z-[9999] h-full w-[80%] max-w-[320px] bg-white shadow-2xl">

                        <div className="flex items-center justify-between border-b p-4">
                            <h2 className="text-xl font-bold">Menu</h2>

                            <button onClick={() => setMenuOpen(false)}>
                                <FiX size={26} />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-6 p-6 text-lg">
                            {/* <a href="#">Главная</a>
                            <a href="#">Каталог</a>
                            <Link to={"/reviews"}>Отзывы</Link> */}
                            <Link to={"/filter"}>Фильтры</Link>
                        </nav>

                    </div>
                </>
            )}

            {/* MAIN */}
            <main className="container absolute mx-auto px-4 lg:px-10 pt-24 pb-24">

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* CONTENT */}
                    <section className="flex-1 min-w-0">

                        <h1 className="text-3xl mt-7 text-white font-bold lg:text-5xl mb-3">
                            Каталог
                        </h1>



                        {/* SWIPER */}
                        <div className="relative">

                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                className="absolute left-2 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white shadow p-2"
                            >
                                ←
                            </button>

                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                className="absolute right-2 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white shadow p-2"
                            >
                                →
                            </button>

                            <Swiper
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                                spaceBetween={20}
                                slidesPerView="auto"
                                className="!pr-6"
                            >
                                {images.map((img, i) => (
                                    <SwiperSlide key={i} className="!w-[280px]">
                                        <div
                                            onClick={() => setActiveImg(i)}
                                            className="rounded-2xl border bg-white overflow-hidden shadow-sm cursor-pointer"
                                        >
                                            <img
                                                src={img}
                                                className="h-[200px] w-full object-cover"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                    </section>
                </div>
            </main>


            {/* LIGHTBOX */}
            {activeImg !== null && (
                <div className="fixed inset-0 z-[99999] bg-white flex items-center justify-center">

                    <button
                        onClick={() => setActiveImg(null)}
                        className="absolute top-5 right-5 z-[100000] text-white bg-black/20 p-3 rounded-full"
                    >
                        ✕
                    </button>

                    <button
                        onClick={() =>
                            setActiveImg((prev) =>
                                prev <= 0 ? images.length - 1 : prev - 1
                            )
                        }
                        className="fixed left-4 top-1/2 -translate-y-1/2 z-[100000] text-white bg-white/30 p-4 rounded-full"
                    >
                        ←
                    </button>

                    <button
                        onClick={() =>
                            setActiveImg((prev) =>
                                prev >= images.length - 1 ? 0 : prev + 1
                            )
                        }
                        className="fixed right-4 top-1/2 -translate-y-1/2 z-[100000] text-white bg-white/30 p-4 rounded-full"
                    >
                        →
                    </button>

                    <img
                        src={images[activeImg]}
                        className="max-w-[90%] max-h-[80%] rounded-2xl"
                    />
                </div>
            )}

            {/* CALL BUTTON */}
            <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4 lg:hidden">
                <a onClick={() => setOpen(true)}
                    className="w-full max-w-[420px] flex items-center justify-center gap-2 rounded-full bg-black py-2 text-white shadow-md"
                >
                    <FiPhone size={14} />Позвонить
                </a>

            </div>

            <div>
                {/* Кнопка ПОЗВОНИТЬ */}

                {/* Modal */}
                {open && (
                    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-5">

                        {/* Форма */}
                        <div className="relative w-full max-w-5xl bg-[#0B0B0B] rounded-[30px] p-6 md:p-10 text-white">

                            {/* Закрыть */}
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-5 right-5 text-4xl text-white"
                            >
                                ×
                            </button>

                            {/* Заголовок */}
                            <h1 className="text-2xl md:text-5xl font-semibold mb-5">
                                Оставьте заявку на консультацию
                            </h1>

                            {/* Текст */}
                            <p className="text-white/80 text-lg md:text-2xl mb-10">
                                Наш менеджер свяжется с вами для уточнения всех деталей
                            </p>

                            {/* Inputs */}
                            <div className="flex flex-col lg:flex-row gap-6 items-end">

                                <div className="bg-[#F6FFD7] rounded-[30px] p-5 w-full">

                                    <input
                                        type="text"
                                        placeholder="Имя"
                                        className="w-full h-[70px] rounded-[20px] bg-[#EDF6E4] px-6 text-black outline-none mb-5"
                                    />

                                    <input
                                        type="tel"
                                        placeholder="+7 (000) 000 00 00"
                                        className="w-full h-[70px] rounded-[20px] bg-[#EDF6E4] px-6 text-black outline-none"
                                    />
                                </div>

                                <button className="w-full lg:w-[250px] h-[80px] rounded-[25px] bg-[#F6FFD7] text-black text-2xl font-medium">
                                    Готово
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
}