import { useState } from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import { Link } from "react-router-dom";
import img1 from "../assets/img1.webp"
import img2 from "../assets/img2.webp"
import img3 from "../assets/img3.webp"
import { useParams } from "react-router-dom";



const Filter = () => {
    const [type, setType] = useState("");
    const { slug } = useParams();

    const [areaFrom, setAreaFrom] = useState("");
    const [areaTo, setAreaTo] = useState("");

    const [priceFrom, setPriceFrom] = useState("");
    const [priceTo, setPriceTo] = useState("");

    const [communications, setCommunications] = useState({
        gas: false,
        light: false,
        water: false,
        internet: false,
    });

    const resetFilters = () => {
        setType("");
        setAreaFrom("");
        setAreaTo("");
        setPriceFrom("");
        setPriceTo("");
        setCommunications({
            gas: false,
            light: false,
            water: false,
            internet: false,
        });
    };

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-10">

            <Link to={'/'}>
                <CiCircleChevLeft className="text-[#29494C] text-2xl md:text-3xl" />
            </Link>

            <h1 className="text-[#29494C] text-lg md:text-xl font-400 mt-5">
                Каталог с фильтрами и карточками участка
            </h1>

            <h2 className="text-[#29494C] text-sm md:text-base font-400 mt-3 mb-5">
                Фильтрация участков с ограничением недоступных выборов
            </h2>

            {/* FILTER */}
            <div className="bg-white rounded-[30px] p-5 md:p-8 lg:p-10 shadow-sm border border-gray-100">

                <h2 className="text-2xl md:text-3xl font-semibold mb-8">
                    Фильтры
                </h2>

                {/* TYPE */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 border-b border-gray-200 gap-4">

                    <span className="text-sm md:text-base font-medium">
                        Тип участка
                    </span>

                    <div className="flex gap-3 flex-wrap">
                        <button
                            onClick={() => setType("ИЖС")}
                            className={`px-5 md:px-6 py-2 md:py-3 rounded-xl border transition ${type === "ИЖС"
                                ? "bg-black text-white border-black"
                                : "bg-white border-gray-300"
                                }`}
                        >
                            ИЖС
                        </button>

                        <button
                            onClick={() => setType("ЛПХ")}
                            className={`px-5 md:px-6 py-2 md:py-3 rounded-xl border transition ${type === "ЛПХ"
                                ? "bg-black text-white border-black"
                                : "bg-white border-gray-300"
                                }`}
                        >
                            ЛПХ
                        </button>
                    </div>
                </div>

                {/* AREA */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 py-6 border-b border-gray-200">

                    <span className="text-sm md:text-base font-medium">
                        Площадь
                    </span>

                    <div className="flex gap-3">
                        <input
                            type="number"
                            placeholder="от"
                            value={areaFrom}
                            onChange={(e) => setAreaFrom(e.target.value)}
                            className="w-[80px] md:w-[100px] h-10 px-3 md:px-4 rounded-xl border border-gray-300 outline-none"
                        />

                        <input
                            type="number"
                            placeholder="до"
                            value={areaTo}
                            onChange={(e) => setAreaTo(e.target.value)}
                            className="w-[80px] md:w-[100px] h-10 px-3 md:px-4 rounded-xl border border-gray-300 outline-none"
                        />
                    </div>
                </div>

                {/* PRICE */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 border-b border-gray-200 gap-3">

                    <span className="text-sm md:text-base font-medium">
                        Цена
                    </span>

                    <div className="flex gap-3">
                        <input
                            type="number"
                            placeholder="от"
                            value={priceFrom}
                            onChange={(e) => setPriceFrom(e.target.value)}
                            className="w-[80px] md:w-[100px] h-10 md:h-12 px-3 md:px-4 rounded-xl border border-gray-300 outline-none"
                        />

                        <input
                            type="number"
                            placeholder="до"
                            value={priceTo}
                            onChange={(e) => setPriceTo(e.target.value)}
                            className="w-[80px] md:w-[100px] h-10 md:h-12 px-3 md:px-4 rounded-xl border border-gray-300 outline-none"
                        />
                    </div>
                </div>

                {/* COMMUNICATIONS */}
                <div className="py-6">

                    <span className="text-base md:text-lg font-medium">
                        Коммуникации
                    </span>

                    <div className="flex flex-wrap gap-5 mt-5">

                        {["gas", "light", "water", "internet"].map((key) => (
                            <label key={key} className="flex items-center gap-2 text-sm md:text-base">
                                <input
                                    type="checkbox"
                                    checked={communications[key]}
                                    onChange={(e) =>
                                        setCommunications({
                                            ...communications,
                                            [key]: e.target.checked,
                                        })
                                    }
                                />
                                {key}
                            </label>
                        ))}

                    </div>
                </div>

                {/* BUTTONS */}
                <div className="flex gap-4 mt-8 flex-col md:flex-row">

                    <button
                        onClick={resetFilters}
                        className="px-6 py-3 rounded-xl bg-[#EAE4DA] text-[#29494C] border border-[#9E8470CC]"
                    >
                        Сбросить
                    </button>

                    <button className="px-6 py-3 rounded-xl bg-[#29494C] text-[#FFFEEB]">
                        Применить
                    </button>

                </div>
            </div>

            {/* RESULTS */}
            <h1 className="text-[#29494C] text-lg md:text-xl font-400 mt-10">
                Подходящие варианты:
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">

                {[img1, img2, img3].map((img, i) => (
                    <div key={i} className="bg-[#FFFFFF33] backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg w-full">

                        <img
                            src={img}
                            className="h-50 w-full object-cover rounded-xl"
                            alt="img"
                            loading="lazy"
                        />

                        <div className="mt-3">

                            <h1 className="text-[#29494C] text-xl font-medium">
                                Участок {i + 1}
                            </h1>

                            <p className="text-[#28727A] text-xl font-medium mt-2">
                                500 000 ₽
                            </p>

                            <p className="text-[#666666] text-lg mt-2">
                                6 Соток
                            </p>

                            <div className="mt-4 flex justify-center">
                                <Link
                                    to={"/learnmore"}
                                    className="w-full text-center p-3 rounded-3xl border text-[#29494C] shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:scale-[1.02] transition"
                                >
                                    Подробнее
                                </Link>
                            </div>

                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default Filter;