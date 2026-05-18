import { useState } from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import { Link } from "react-router-dom";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img11 from "../assets/img11.webp";
import { useEffect } from "react";

const Filter = () => {
    const [type, setType] = useState("");
    const [allSelected, setAllSelected] = useState(false);

    const [areaFrom, setAreaFrom] = useState("");
    const [areaTo, setAreaTo] = useState("");

    const [priceFrom, setPriceFrom] = useState("");
    const [priceTo, setPriceTo] = useState("");

    const [sortBy, setSortBy] = useState("");

    const [selectedPlot, setSelectedPlot] = useState(null);

    const [communications, setCommunications] = useState({
        gas: false,
        light: false,
        water: false,
        internet: false,
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const plots = [
        {
            id: 1,
            title: "Участок Бакальская 1 (Аврора)",
            sea: 1,
            price: 500000,
            area: 6,
            image: img1,
            type: "ИЖС",
        },
        {
            id: 2,
            title: "Участок Бакальская 2",
            sea: 2.5,
            price: 400000,
            area: 6,
            image: img2,
            type: "ЛПХ",
        },
        {
            id: 3,
            title: "KARA DENIZ",
            sea: 2,
            price: 750000,
            area: 6,
            image: img3,
            type: "коммерция",
        },
        {
            id: 4,
            title: "Верина полянка",
            sea: 2,
            price: 550000,
            area: 6,
            image: img11,
            type: "сельхоз",
        },
    ];

    const filteredPlots = plots.filter((plot) => {
        if (!allSelected && type && plot.type !== type) return false;

        if (areaFrom && plot.area < Number(areaFrom)) return false;
        if (areaTo && plot.area > Number(areaTo)) return false;

        if (priceFrom && plot.price < Number(priceFrom)) return false;
        if (priceTo && plot.price > Number(priceTo)) return false;

        return true;
    });

    const sortedPlots = [...filteredPlots].sort((a, b) => {
        if (sortBy === "price") return a.price - b.price;
        if (sortBy === "area") return a.area - b.area;
        if (sortBy === "sea") return a.sea - b.sea;
        return 0;
    });

    const resetFilters = () => {
        setType("");
        setAreaFrom("");
        setAreaTo("");
        setPriceFrom("");
        setPriceTo("");
        setAllSelected(false);
        setSortBy("");

        setCommunications({
            gas: false,
            light: false,
            water: true,
            internet: false,
        });
    };

    return (
        <div className="min-h-screen bg-gray-100">

            {/* HEADER */}
            <div className="bg-[#29494C] py-4 px-4 md:px-6 lg:px-10">
                <Link to={"/"} className="flex items-center gap-2 text-white">
                    <CiCircleChevLeft className="text-2xl md:text-3xl text-[#7DE2D1]" />
                    <span className="text-sm md:text-base">Назад</span>
                </Link>

                <h1 className="text-white text-lg md:text-xl font-semibold mt-4">
                    Каталог с фильтрами и карточками участка
                </h1>

                <h2 className="text-[#7DE2D1] text-sm md:text-base mt-2">
                    Фильтрация участков с ограничением недоступных выборов
                </h2>
            </div>

            {/* FILTER WRAP */}
            <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-10">

                {/* FILTER */}
                <div className="bg-white rounded-[30px] p-5 md:p-8 lg:p-10 shadow-sm border border-gray-100">

                    <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#29494C]">
                        Фильтры
                    </h2>

                    {/* TYPE */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 border-b border-gray-200 gap-4">
                        <span className="text-sm md:text-base font-medium text-[#29494C]">
                            Тип участка
                        </span>

                        <div className="flex gap-3 flex-wrap">
                            {["ИЖС", "ЛПХ", "коммерция", "сельхоз"].map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setType(t)}
                                    className={`px-5 md:px-6 py-2 md:py-3 rounded-xl border transition ${type === t
                                            ? "bg-[#29494C] text-white border-[#29494C]"
                                            : "bg-white border-gray-300 text-[#29494C]"
                                        }`}
                                >
                                    {t}
                                </button>
                            ))}

                            <button
                                onClick={() => setAllSelected(!allSelected)}
                                className={`px-5 md:px-6 py-2 md:py-3 rounded-xl border transition ${allSelected
                                        ? "bg-[#7DE2D1] text-[#29494C] border-[#7DE2D1]"
                                        : "bg-white border-gray-300 text-[#29494C]"
                                    }`}
                            >
                                все
                            </button>
                        </div>
                    </div>

                    {/* AREA */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 py-6 border-b border-gray-200">
                        <span className="text-sm md:text-base font-medium text-[#29494C]">
                            Площадь
                        </span>

                        <div className="flex gap-3">
                            <input
                                type="number"
                                value={areaFrom}
                                onChange={(e) => setAreaFrom(e.target.value)}
                                className="w-[80px] md:w-[100px] h-10 px-3 md:px-4 rounded-xl border border-gray-300 outline-none"
                                placeholder="от соток"
                            />

                            <input
                                type="number"
                                value={areaTo}
                                onChange={(e) => setAreaTo(e.target.value)}
                                className="w-[80px] md:w-[100px] h-10 px-3 md:px-4 rounded-xl border border-gray-300 outline-none"
                                placeholder="до соток"
                            />
                        </div>
                    </div>

                    {/* PRICE */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 border-b border-gray-200 gap-3">
                        <span className="text-sm md:text-base font-medium text-[#29494C]">
                            Цена
                        </span>

                        <div className="flex gap-3">
                            <input
                                type="number"
                                value={priceFrom}
                                onChange={(e) => setPriceFrom(e.target.value)}
                                className="w-[80px] md:w-[100px] h-10 md:h-12 px-3 md:px-4 rounded-xl border border-gray-300 outline-none"
                                placeholder="от ₽"
                            />

                            <input
                                type="number"
                                value={priceTo}
                                onChange={(e) => setPriceTo(e.target.value)}
                                className="w-[80px] md:w-[100px] h-10 md:h-12 px-3 md:px-4 rounded-xl border border-gray-300 outline-none"
                                placeholder="до ₽"
                            />
                        </div>
                    </div>

                    {/* COMMUNICATIONS */}
                    <div className="py-6">
                        <span className="text-base md:text-lg font-medium text-[#29494C]">
                            Коммуникации
                        </span>

                        <div className="flex flex-wrap gap-5 mt-5">
                            {["Газ", "Электричество", "Вода", "Интернет"].map((key) => (
                                <label key={key} className="flex items-center gap-2 text-sm md:text-base text-[#29494C]">
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

                    {/* SORT */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 py-6 border-b border-gray-200">
                        <span className="text-sm md:text-base font-medium text-[#29494C]">
                            Сортировка
                        </span>

                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="w-[200px] h-10 px-3 rounded-xl border border-gray-300 outline-none bg-white"
                        >
                            <option value="">Без сортировки</option>
                            <option value="price">По цене</option>
                            <option value="area">По площади</option>
                            <option value="sea">По расстоянию до моря</option>
                        </select>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex gap-4 mt-8 flex-col md:flex-row">
                        <button onClick={resetFilters} className="px-6 py-3 rounded-xl bg-[#EAE4DA] text-[#29494C] border border-[#9E8470CC]">
                            Сбросить
                        </button>

                        <button className="px-6 py-3 rounded-xl bg-[#29494C] text-[#FFFEEB]">
                            Применить
                        </button>
                    </div>

                    {/* COUNT */}
                    <div className="mt-8 text-[#29494C] text-base md:text-lg">
                        Найдено участков: {sortedPlots.length}
                    </div>
                </div>

                {/* RESULTS */}
                <div className="flex flex-col gap-5 mt-10">

                    <h1 className="text-[#29494C] text-lg md:text-xl font-400">
                        Подходящие варианты:
                    </h1>

                    {sortedPlots.map((plot) => (
                        <div key={plot.id} className="flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6 md:p-8 rounded-3xl bg-white shadow-sm">

                            <img src={plot.image} className="w-full md:w-60 h-48 md:h-40 rounded-3xl object-cover" />

                            <div className="flex flex-col gap-2 text-center md:text-left">

                                <h1 className="text-xl md:text-2xl font-bold text-[#29494C]">
                                    {plot.title}
                                </h1>

                                <p className="text-[#666]">До моря: {plot.sea} км</p>

                                <p className="text-lg md:text-xl text-[#29494C] font-medium">
                                    {plot.price.toLocaleString()} ₽
                                </p>

                                <p className="text-[#666]">
                                    {plot.area} соток
                                </p>

                                <Link
                                    to={`/plot/${plot.id}`}
                                    className="mt-2 mx-auto md:mx-0 inline-flex items-center justify-center w-[140px] h-[40px] rounded-2xl bg-[#7DE2D1] text-[#29494C]"
                                >
                                    Подробнее
                                </Link>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Filter;