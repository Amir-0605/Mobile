import { useParams, Link } from "react-router-dom";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img11 from "../assets/img11.webp";
import map1 from "../assets/map1.webp";
import map2 from "../assets/map2.webp";
import map3 from "../assets/map3.webp";
import map4 from "../assets/map4.webp";
import map5 from "../assets/map5.webp";
import map6 from "../assets/map6.webp";
import map7 from "../assets/map7.webp";
import map8 from "../assets/map8.webp";
import map9 from "../assets/map9.webp";
import map10 from "../assets/map10.webp";
import map11 from "../assets/map11.webp";
import map12 from "../assets/map12.webp";
import { CiCircleChevLeft } from "react-icons/ci";
import { useEffect, useState } from "react";

const PlotDetails = () => {
    const { id } = useParams();
    const [open, setOpen] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const plots = [
        {
            id: 1,
            title: "Участок Бакальская 1 (Аврора)",
            sea: 1,
            type: "С/Х",
            price: 500000,
            kadastr: "90:10::110301:42 (1/2/3)",
            own: "Общедолевая (16 участков на 1 га)",
            communication: "400 м от границы нарезки",
            comment: "Общая площадь поселка 11,5 га",
            lake: "На берегу есть озеро с голубой грязью",
            park: "До парка Бакальская коса 10 км",
            ijs: "Планируется присоединение первой береговой линии к.с. Аврора и перевод в ИЖС",
            area: "6 Соток",
            image: img1,
            map1: map1,
            map2: map2,
            map3: map3,
            invest: "Инвестиции от 5 лет",
            perevod: "Перевод в ИЖС за счет расширения",
        },
        {
            id: 2,
            title: "Участок Бакальская 2",
            sea: 2.5,
            type: "С/Х",
            price: 400000,
            kadastr: "90:14:020701:246",
            own: "общедолевая (16 участков на 1 га)",
            communication: "Электричество в 700 м от границы участков",
            comment: 1,
            lake: 1,
            park: "До рекреационного парка Бакальская коса 12 км",
            ijs: 1,
            area: "6 Соток",
            image: img2,
            map1: map4,
            map2: map5,
            map3: map6,
            invest: "Инвестиции от 2х лет",
            perevod: 1,
        },
        {
            id: 3,
            title: "KARA DENIZ",
            sea: 2,
            type: "С/Х",
            price: 750000,
            kadastr: "частная, у каждого свой кадастр",
            own: "общедолевая (16 участков на 1 га)",
            communication: 1,
            comment: "Общая площадь уже 48га ",
            lake: 1,
            park: 1,
            ijs: 1,
            area: "6 Соток",
            image: img3,
            map1: map7,
            map2: map8,
            map3: map9,
            invest: "Инвестиции от 3х лет ",
            perevod: 1,
        },
        {
            id: 4,
            title: "Верина полянка",
            sea: 1.5,
            type: "С/Х",
            price: 550000,
            kadastr: "частная, у каждого свой кадастр",
            own: 1,
            communication: "Доступность электричества и газовой точки",
            comment: "Общая площадь уже 48га ",
            lake: "До грязелечебного озера Ярылгач - 800м",
            park: 1,
            ijs: 1,
            area: "6 Соток",
            image: img11,
            map1: map10,
            map2: map11,
            map3: map12,
            invest: "Инвестиции от 2-3 лет",
            perevod: 1,
        },
    ];

    const plot = plots.find((item) => item.id === Number(id));

    return (
        <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-10">
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

            <Link to={"/filter"}>
                <CiCircleChevLeft className="text-[#29494C] text-2xl md:text-3xl" />
            </Link>

            <div className="mt-6 bg-white rounded-3xl p-4 md:p-6 lg:p-10 shadow">

                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#29494C]">
                        {plot.title}
                    </h1>

                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 pt-5">

                        <img
                            src={plot.image}
                            alt="img"
                            className="w-full lg:w-120 h-[220px] md:h-[300px] object-cover rounded-3xl"
                        />

                        <span className="flex flex-col gap-10 lg:gap-30 w-full">

                            <span>
                                <p className="text-2xl text-[#28727A] pb-5 font-semibold">
                                    {plot.price.toLocaleString()} ₽
                                </p>

                                <p className="text-[#28727A]">
                                    {plot.area}
                                </p>
                            </span>

                            <button onClick={() => setOpen(true)} className="text-[#28727A] border bg-[#F7E2CCB2] border-[#29494C] rounded-3xl p-3 cursor-pointer w-full md:w-auto">
                                Связаться с нами
                            </button>

                        </span>

                    </div>
                </div>

                <div className="border mt-5 p-4 rounded-2xl flex flex-col gap-3">

                    <h1 className="text-[#29494C] text-xl md:text-2xl font-bold">
                        Характеристики:
                    </h1>

                    <span className="flex flex-col md:flex-row md:justify-between gap-1 text-[#29494C]">
                        <p>Тип:</p>
                        <p>{plot.type}</p>
                    </span>

                    <span className="flex flex-col md:flex-row md:justify-between gap-1 text-[#29494C]">
                        <p>Площадь:</p>
                        <p>{plot.area}</p>
                    </span>

                    <span className="flex flex-col md:flex-row md:justify-between gap-1 text-[#29494C]">
                        <p>До моря:</p>
                        <p>{plot.sea}</p>
                    </span>

                    <span className="flex flex-col md:flex-row md:justify-between gap-1 text-[#29494C]">
                        <p>Кадастр:</p>
                        <p>{plot.kadastr}</p>
                    </span>

                    <span className="flex flex-col md:flex-row md:justify-between gap-1 text-[#29494C]">
                        <p>Собственность:</p>
                        <p>{plot.own}</p>
                    </span>

                    <span className="flex flex-col md:flex-row md:justify-between gap-1 text-[#29494C]">
                        <p>Коммуникации</p>
                        <p>{plot.communication}</p>
                    </span>

                </div>

                <div className="mt-5 text-[#29494C] border rounded-2xl flex flex-col gap-3 p-4">

                    <h1 className="text-xl md:text-2xl font-bold">
                        Описание участка:
                    </h1>

                    <p>— {plot.comment}</p>
                    <p>— {plot.lake}</p>
                    <p>— {plot.park}</p>
                    <p>— {plot.ijs}</p>

                </div>

                <div className="text-[#29494C] border rounded-2xl p-4 mt-5">

                    <h1 className="text-xl md:text-2xl font-bold">
                        Инвестиции в участок:
                    </h1>

                    <p>— {plot.invest}</p>
                    <p>— {plot.perevod}</p>

                </div>

                <div className="mt-5 flex flex-col gap-5">

                    <img
                        src={plot.map1}
                        alt="map"
                        className="w-full h-auto rounded-2xl"
                    />

                    <span className="flex flex-col md:flex-row gap-5 justify-between">

                        <img
                            src={plot.map2}
                            alt="map"
                            className="w-full md:w-[48%] rounded-2xl"
                        />

                        <img
                            src={plot.map3}
                            alt="map"
                            className="w-full md:w-[48%] rounded-2xl"
                        />

                    </span>

                </div>

            </div>
            <div onClick={() => setOpen(true)} className="mt-10 flex justify-center">
                <button className="bg-gradient-to-r from-[#FFB800] cursor-pointer to-[#FF7A00] text-white px-8 py-4 rounded-2xl text-lg shadow-xl hover:scale-105 transition">
                    Записаться на показ
                </button>
            </div>

        </div>
    );
};

export default PlotDetails;