import React, { useState } from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import { Link } from "react-router-dom";

const Filter = () => {
    const [type, setType] = useState("");

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
        <div className="max-w-5xl mx-auto p-5">
            <Link to={'/'}><CiCircleChevLeft className="text-[#29494C]" /></Link>

            <h1 className="text-[#29494C] text-lg font-400 mt-5">Каталог с фильтрами и карточками участка</h1>
            <h2 className="text-[#29494C] text-sm font-400 mt-5 mb-5">Фильтрация участков с ограничением недоступных выборов</h2>
            <div className="bg-white rounded-[30px] p-8 shadow-sm border border-gray-100">

                <h2 className="text-3xl font-semibold mb-8">
                    Фильтры
                </h2>

                {/* Тип участка */}
                <div className="flex items-center justify-between py-6 border-b border-gray-200">
                    <span className="text-sm font-medium">Тип участка</span>

                    <div className="flex gap-3">
                        <button
                            onClick={() => setType("ИЖС")}
                            className={`px-6 py-3 rounded-xl border transition ${type === "ИЖС"
                                ? "bg-black text-white border-black"
                                : "bg-white border-gray-300"
                                }`}
                        >
                            ИЖС
                        </button>

                        <button
                            onClick={() => setType("ЛПХ")}
                            className={`px-6 py-3 rounded-xl border transition ${type === "ЛПХ"
                                ? "bg-black text-white border-black"
                                : "bg-white border-gray-300"
                                }`}
                        >
                            ЛПХ
                        </button>
                    </div>
                </div>

                {/* Площадь */}
                <div className="flex items-center justify-between gap-3 py-6 border-b border-gray-200">
                    <span className="text-sm font-medium">Площадь</span>

                    <div className="flex gap-3">
                        <input
                            type="number"
                            placeholder="от"
                            value={areaFrom}
                            onChange={(e) => setAreaFrom(e.target.value)}
                            className="w-[80px] h-10 px-4 rounded-xl border border-gray-300 outline-none"
                        />

                        <input
                            type="number"
                            placeholder="до"
                            value={areaTo}
                            onChange={(e) => setAreaTo(e.target.value)}
                            className="w-[80px] h-10 px-4 rounded-xl border border-gray-300 outline-none"
                        />
                    </div>
                </div>

                {/* Цена */}
                <div className="flex items-center justify-between py-6 border-b border-gray-200">
                    <span className="text-sm font-medium">Цена</span>

                    <div className="flex gap-3">
                        <input
                            type="number"
                            placeholder="от"
                            value={priceFrom}
                            onChange={(e) => setPriceFrom(e.target.value)}
                            className="w-[80px] h-12 px-4 rounded-xl border border-gray-300 outline-none"
                        />

                        <input
                            type="number"
                            placeholder="до"
                            value={priceTo}
                            onChange={(e) => setPriceTo(e.target.value)}
                            className="w-[80px] h-12 px-4 rounded-xl border border-gray-300 outline-none"
                        />
                    </div>
                </div>

                {/* Коммуникации */}
                <div className="flex flex-col items-center justify-between py-6">
                    <span className="text-lg font-medium">Коммуникации</span>

                    <div className="flex gap-5 mt-5 flex-wrap">

                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={communications.gas}
                                onChange={(e) =>
                                    setCommunications({
                                        ...communications,
                                        gas: e.target.checked,
                                    })
                                }
                            />
                            Газ
                        </label>

                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={communications.light}
                                onChange={(e) =>
                                    setCommunications({
                                        ...communications,
                                        light: e.target.checked,
                                    })
                                }
                            />
                            Свет
                        </label>

                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={communications.water}
                                onChange={(e) =>
                                    setCommunications({
                                        ...communications,
                                        water: e.target.checked,
                                    })
                                }
                            />
                            Вода
                        </label>

                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={communications.internet}
                                onChange={(e) =>
                                    setCommunications({
                                        ...communications,
                                        internet: e.target.checked,
                                    })
                                }
                            />
                            Интернет
                        </label>

                    </div>
                </div>

                {/* Кнопки */}
                <div className="flex gap-4 mt-8">
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
            <div>
                <h1 className="text-[#29494C] text-lg font-400 mt-10">Подходящие варианты:</h1>
                <div className="bg-[#FFFFFF33] backdrop-blur-sm rounded-2xl mt-5 p-4 border border-white/20 shadow-lg w-80">

                    <img
                        src="/src/assets/6919b57f96876f787637a902ea4e5888eb47ebb1.jpg"
                        className="h-50 w-full object-cover rounded-xl"
                        alt="img"
                    />

                    <div className="mt-3">

                        <h1 className="text-[#29494C] text-xl font-medium">
                            Участок Бакальская 1 (Аврора)
                        </h1>

                        <p className="text-[#28727A] text-xl font-medium mt-2">
                            500 000 ₽
                        </p>

                        <p className="text-[#666666] text-lg mt-2">
                            6 Соток
                        </p>

                        <div className="mt-4 flex justify-center">
                            <Link to={"/learnmore"} className="w-full text-center p-3 rounded-3xl border text-[#29494C] shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:scale-[1.02] transition">
                                Подробнее
                            </Link>
                        </div>

                    </div>

                </div>
                <div className="bg-[#FFFFFF33] backdrop-blur-sm rounded-2xl mt-5 p-4 border border-white/20 shadow-lg w-80">

                    <img
                        src="/src/assets/0875dc54c11d9b0b821bd39a6a3b7a54ba7078a5.jpg"
                        className="h-50 w-full object-cover rounded-xl"
                        alt="img"
                    />

                    <div className="mt-3">

                        <h1 className="text-[#29494C] text-xl font-medium">
                            Участок Бакальская 2
                        </h1>

                        <p className="text-[#28727A] text-xl font-medium mt-2">
                            400 000 ₽
                        </p>

                        <p className="text-[#666666] text-lg mt-2">
                            6 Соток
                        </p>

                        <div className="mt-4 flex justify-center">
                            <Link className="w-full text-center p-3 rounded-3xl border text-[#29494C] shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:scale-[1.02] transition">
                                Подробнее
                            </Link>
                        </div>

                    </div>

                </div>

                <div className="bg-[#FFFFFF33] backdrop-blur-sm rounded-2xl mt-5 p-4 border border-white/20 shadow-lg w-80">

                    <img
                        src="/src/assets/f0e966385a21578dcc918f70ccdeb7332aa05f69.jpg"
                        className="h-50 w-full object-cover rounded-xl"
                        alt="img"
                    />

                    <div className="mt-3">

                        <h1 className="text-[#29494C] text-xl font-medium">
                            KARA DENIZ
                        </h1>

                        <p className="text-[#28727A] text-xl font-medium mt-2">
                            750 000 ₽
                        </p>

                        <p className="text-[#666666] text-lg mt-2">
                            6 Соток
                        </p>

                        <div className="mt-4 flex justify-center">
                            <Link className="w-full text-center p-3 rounded-3xl border text-[#29494C] shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:scale-[1.02] transition">
                                Подробнее
                            </Link>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Filter;