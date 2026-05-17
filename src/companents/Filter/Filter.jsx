import { useState } from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import { Link } from "react-router-dom";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img11 from "../assets/img11.webp";

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

    const plots = [
        {
            id: 1,
            title: "Участок Бакальская 1 (Аврора)",
            sea: 1,
            price: 500000,
            area: 6,
            image: img1,
        },
        {
            id: 2,
            title: "Участок Бакальская 2",
            sea: 2.5,
            price: 400000,
            area: 6,
            image: img2,
        },
        {
            id: 3,
            title: "KARA DENIZ",
            sea: 2,
            price: 750000,
            area: 6,
            image: img3,
        },
        {
            id: 4,
            title: "Верина полянка",
            sea: 2,
            price: 550000,
            area: 6,
            image: img11,
        },
    ];

    const sortedPlots = [...plots].sort((a, b) => {
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
        <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-10 bg-[linear-gradient(45deg,#FFFFFF_0%,#99999999_100%)] inset-0 bg-black/70">

            <Link to={"/"}>
                <CiCircleChevLeft className="text-white text-2xl md:text-3xl" />
            </Link>

            <h1 className="text-white text-lg md:text-xl font-400 mt-5">
                Каталог с фильтрами и карточками участка
            </h1>

            <h2 className="text-white text-sm md:text-base font-400 mt-3 mb-5">
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
                            className={`px-5 md:px-6 py-2 md:py-3 rounded-xl border transition ${type === "ИЖС" || allSelected
                                ? "bg-black text-white border-black"
                                : "bg-white border-gray-300"
                                }`}
                        >
                            ИЖС
                        </button>

                        <button
                            onClick={() => setType("ЛПХ")}
                            className={`px-5 md:px-6 py-2 md:py-3 rounded-xl border transition ${type === "ЛПХ" || allSelected
                                ? "bg-black text-white border-black"
                                : "bg-white border-gray-300"
                                }`}
                        >
                            ЛПХ
                        </button>

                        <button
                            onClick={() => setType("коммерция")}
                            className={`px-5 md:px-6 py-2 md:py-3 rounded-xl border transition ${type === "коммерция" || allSelected
                                ? "bg-black text-white border-black"
                                : "bg-white border-gray-300"
                                }`}
                        >
                            коммерция
                        </button>

                        <button
                            onClick={() => setType("сельхоз")}
                            className={`px-5 md:px-6 py-2 md:py-3 rounded-xl border transition ${type === "сельхоз" || allSelected
                                ? "bg-black text-white border-black"
                                : "bg-white border-gray-300"
                                }`}
                        >
                            сельхоз
                        </button>

                        <button
                            onClick={() => setAllSelected(!allSelected)}
                            className={`px-5 md:px-6 py-2 md:py-3 rounded-xl border transition ${allSelected
                                ? "bg-black text-white border-black"
                                : "bg-white border-gray-300"
                                }`}
                        >
                            все
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
                            placeholder="от,сот."
                            value={areaFrom}
                            onChange={(e) => setAreaFrom(e.target.value)}
                            className="w-[80px] md:w-[100px] h-10 px-3 md:px-4 rounded-xl border border-gray-300 outline-none"
                        />

                        <input
                            type="number"
                            placeholder="до,сот."
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
                            placeholder="от,₽"
                            value={priceFrom}
                            onChange={(e) => setPriceFrom(e.target.value)}
                            className="w-[80px] md:w-[100px] h-10 md:h-12 px-3 md:px-4 rounded-xl border border-gray-300 outline-none"
                        />

                        <input
                            type="number"
                            placeholder="до,₽"
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

                        {["Газ", "Электричество", "Вода", "Интернет"].map((key) => (
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

                {/* SORT + COUNT */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-8">

                    <p className="text-[#29494C] text-base md:text-lg">
                        Найдено участков: {sortedPlots.length}
                    </p>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="border border-[#9E8470CC] rounded-xl px-4 py-3 outline-none bg-white"
                    >
                        <option value="">Сортировка</option>
                        <option value="price">По цене</option>
                        <option value="area">По площади</option>
                        <option value="sea">По расстоянию до моря</option>
                    </select>

                </div>

            </div>

            <div className="flex flex-col gap-5">

                <h1 className="text-[#29494C] text-lg md:text-xl font-400 mt-10">
                    Подходящие варианты:
                </h1>

                {sortedPlots.map((plot) => (
                    <div
                        key={plot.id}
                        className="flex flex-col md:flex-row items-center gap-6 md:gap-10 p-5 md:p-8 rounded-3xl bg-white/20 backdrop-blur-md"
                    >

                        <img
                            src={plot.image}
                            alt="img"
                            className="w-full md:w-60 h-48 md:h-40 rounded-3xl object-cover"
                        />

                        <div className="flex flex-col gap-4 text-center md:text-left">

                            <h1 className="text-xl md:text-2xl font-bold text-[#29494C]">
                                {plot.title}
                            </h1>

                            <p>До моря: {plot.sea} км</p>

                            <p className="text-lg md:text-xl text-[#28727A] font-medium">
                                {plot.price.toLocaleString()} ₽
                            </p>

                            <p className="text-base text-[#666]">
                                {plot.area} Соток
                            </p>

                            <Link
                                to={`/plot/${plot.id}`}
                                className="border border-[#9E8470E5] w-93 flex justify-center rounded-3xl text--center shadow-[0_4px_20px_#00000020] p-3 px-6 text-[#29494C] hover:bg-white/30 transition"
                            >
                                Подробнее
                            </Link>

                        </div>

                    </div>
                ))}

            </div>

            {selectedPlot && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

                    <div className="bg-white max-w-2xl w-full rounded-3xl p-6 md:p-10 relative">

                        <button
                            onClick={() => setSelectedPlot(null)}
                            className="absolute top-4 right-4 text-2xl text-[#29494C]"
                        >
                            ×
                        </button>

                        <img
                            src={selectedPlot.image}
                            alt="img"
                            className="w-full h-60 object-cover rounded-3xl"
                        />

                        <div className="mt-6 flex flex-col gap-4">

                            <h1 className="text-2xl md:text-3xl font-bold text-[#29494C]">
                                {selectedPlot.title}
                            </h1>

                            <p className="text-[#28727A] text-xl font-medium">
                                {selectedPlot.price.toLocaleString()} ₽
                            </p>

                            <p className="text-[#666]">
                                Площадь: {selectedPlot.area} соток
                            </p>

                            <p className="text-[#666]">
                                До моря: {selectedPlot.sea} км
                            </p>

                            <p className="text-[#666]">
                                Тип участка: ИЖС
                            </p>

                            <p className="text-[#666] leading-7">
                                Участок расположен в хорошем районе возле моря.
                                Подходит для строительства дома, дачи или инвестиций.
                                Есть удобный подъезд, коммуникации рядом.
                            </p>

                        </div>

                    </div>

                </div>
            )}

        </div>
    );
};

export default Filter;