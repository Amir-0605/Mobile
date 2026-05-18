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
            map1,
            map2,
            map3,
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


    if (!plot) return null;

    const show = (v) => v && v !== 1;
    useEffect(() => {
        if (!plot) return;

        const centers = {
            1: [45.7527464, 33.2673134], // Аврора
            2: [45.6891250, 33.1329650], // Бакальская 2
            3: [45.6030018, 32.8675110], // KARA DENIZ
            4: [45.5388660, 32.8391800], // Верина полянка
        };

        const loadMap = () => {
            const init = () => {
                if (!document.getElementById("yandex-map")) return;

                const coords = centers[plot.id];

                const map = new window.ymaps.Map("yandex-map", {
                    center: coords,
                    zoom: 14,
                });

                const placemark = new window.ymaps.Placemark(
                    coords,
                    {
                        iconContent: plot.title,   // 👈 текст прямо на метке
                        balloonContent: plot.title,
                        hintContent: plot.title,
                    },
                    {
                        preset: "islands#blueStretchyIcon", // 👈 чтобы текст помещался
                    }
                );

                map.geoObjects.add(placemark);
            };

            const start = () => {
                window.ymaps.ready(init);
            };

            if (!window.ymaps) {
                const script = document.createElement("script");
                script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
                script.onload = start;
                document.head.appendChild(script);
            } else {
                start();
            }
        };

        loadMap();
    }, [plot]);

    return (
        <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-10">

            {open && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-3 sm:p-4 backdrop-blur-sm">

                    <div className="relative w-full max-w-[95%] sm:max-w-2xl lg:max-w-4xl rounded-2xl sm:rounded-[32px] bg-[#111] p-4 sm:p-6 md:p-10 text-white">


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

                        <div className="flex flex-col gap-4 sm:gap-5">


                            <div className="flex flex-col gap-2">
                                <label className="text-xs sm:text-sm text-white/70">Имя</label>
                                <input
                                    placeholder="Введите имя"
                                    className="w-full h-[48px] sm:h-[55px] md:h-[60px] px-3 sm:px-4 rounded-xl bg-white/10 border border-white/20 text-white outline-none"
                                />
                            </div>


                            <div className="flex flex-col gap-2">
                                <label className="text-xs sm:text-sm text-white/70">Телефон</label>
                                <input
                                    placeholder="+7 (000) 000 00 00"
                                    className="w-full h-[48px] sm:h-[55px] md:h-[60px] px-3 sm:px-4 rounded-xl bg-white/10 border border-white/20 text-white outline-none"
                                />
                            </div>


                            <label className="flex items-start gap-3 text-xs sm:text-sm text-white">

                                <input
                                    type="checkbox"
                                    className="w-5 h-5 accent-[#F6FFD7] mt-1 sm:mt-0"
                                />

                                <span className="leading-snug">
                                    Согласен на обработку персональных данных
                                </span>

                            </label>


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

            <div className="mt-4 bg-white rounded-3xl p-4 md:p-6 lg:p-8 shadow">

                <h1 className="text-2xl md:text-3xl font-bold text-[#29494C]">
                    {plot.title}
                </h1>

                <div className="flex flex-col lg:flex-row gap-6 mt-4">

                    <img
                        src={plot.image}
                        className="w-full lg:w-1/2 h-[220px] md:h-[300px] object-cover rounded-3xl"
                    />

                    <div className="flex flex-col gap-4 w-full">

                        <p className="text-2xl text-[#28727A] font-semibold">
                            {plot.price.toLocaleString()} ₽
                        </p>

                        <p className="text-[#28727A]">
                            {plot.area}
                        </p>

                        <button
                            onClick={() => setOpen(true)}
                            className="w-full md:w-auto bg-[#1f6f6b] cursor-pointer text-white rounded-2xl p-3"
                        >
                            Связаться с нами
                        </button>
                    </div>
                </div>

                <div className="mt-4 border p-4 rounded-2xl flex flex-col gap-2">

                    <h2 className="text-[#29494C] text-xl font-bold">
                        Характеристики:
                    </h2>

                    <p>Тип: {plot.type}</p>
                    <p>Площадь: {plot.area}</p>
                    <p>До моря: {plot.sea} км</p>

                    <p>Кадастр: {plot.kadastr}</p>
                    <p>Собственность: {plot.own}</p>

                    {show(plot.communication) && (
                        <p>Коммуникации: {plot.communication}</p>
                    )}
                </div>


                <div className="mt-4 border p-4 rounded-2xl flex flex-col gap-2">

                    <h2 className="font-bold text-xl">Описание участка:</h2>

                    {show(plot.comment) && <p>— {plot.comment}</p>}
                    {show(plot.lake) && <p>— {plot.lake}</p>}
                    {show(plot.park) && <p>— {plot.park}</p>}
                    {show(plot.ijs) && <p>— {plot.ijs}</p>}
                </div>

                <div className="mt-4 border p-4 rounded-2xl">
                    <h2 className="font-bold text-xl">Инвестиции:</h2>
                    <p>{plot.invest}</p>
                    <p>{plot.perevod}</p>
                </div>
                <div className="mt-6 rounded-2xl overflow-hidden">
                    <div id="yandex-map" className="w-full h-[400px]" />
                </div>


                <div className="mt-4 flex flex-col gap-3">

                    <img src={plot.map1} className="rounded-2xl" />

                    <p className="text-center text-sm text-gray-500">
                        Граница участка на кадастровой карте
                    </p>

                    <div className="flex gap-3">
                        <img src={plot.map2} className="w-1/2 rounded-2xl" />
                        <img src={plot.map3} className="w-1/2 rounded-2xl" />
                    </div>
                </div>


            </div>


            <button onClick={() => setOpen(true)} className="mt-6 w-full cursor-pointer bg-[#0f4c4c] text-white py-4 rounded-2xl text-lg">
                Записаться на показ
            </button>

        </div>
    );
};

export default PlotDetails;