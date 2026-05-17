import { useState } from 'react'
import { CiCircleChevLeft } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
import img1 from "../assets/img1.webp"
import map1 from "../assets/map1.webp"
import map2 from "../assets/map2.webp"
import map3 from "../assets/map3.webp"
const LearnMore = () => {
    const [open, setOpen] = useState(false);
    return (


        <div className='container mx-auto px-4 md:px-6 lg:px-10'>
            <>
                <Helmet>
                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "RealEstateListing",
                            name: "Участок Бакальская 1",
                            offers: {
                                "@type": "Offer",
                                price: "500000",
                                priceCurrency: "RUB"
                            }
                        })}
                    </script>
                </Helmet>
            </>
            <div>

                {/* Modal */}
                {open && (
                    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-5">

                        <div className="relative w-full max-w-5xl bg-[#0B0B0B] rounded-[30px] p-6 md:p-10 text-white">

                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-5 right-5 text-4xl text-white"
                            >
                                ×
                            </button>

                            <h1 className="text-2xl md:text-5xl font-semibold mb-5">
                                Оставьте заявку на консультацию
                            </h1>

                            <p className="text-white/80 text-lg md:text-2xl mb-10">
                                Наш менеджер свяжется с вами для уточнения всех деталей
                            </p>

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

            <div className='pt-10 md:pt-16 lg:pt-20'>

                <Link to={'/filter'}>
                    <CiCircleChevLeft className="text-[#29494C] mb-4 text-2xl" />
                </Link>

                <div className='flex flex-col lg:flex-row lg:items-start lg:gap-10'>

                    <div>
                        <h1 className='text-lg md:text-xl lg:text-2xl text-[#29494C] mb-4'>
                            Участок Бакальская 1 (Аврора)
                        </h1>

                        <img
                            src={img1}
                            alt="img"
                            className='w-full md:w-[400px] lg:w-[500px] rounded-3xl h-[250px] md:h-[300px] mb-4 object-cover filter brightness-95 contrast-90 saturate-90 sepia-[0.05]'

                        />

                        <div className='flex justify-between items-center'>
                            <span>
                                <h1 className='text-[#29494C] text-lg md:text-xl'>500 000 ₽</h1>
                                <p className='text-[#29494C] text-sm md:text-base'>6 Соток</p>
                            </span>

                            <div className='flex justify-center lg:justify-start mt-4'>
                                <button
                                    onClick={() => setOpen(true)}
                                    className='bg-[#F7E2CCB2] rounded-3xl text-[#29494C] p-4'
                                >
                                    Связаться с нами
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='bg-[#FFFFFF88] border border-[#4E2D0A29] rounded-2xl flex flex-col lg:flex-row mb-10 mt-5 gap-3 p-4'>

                    <div className='flex flex-col gap-5 w-full'>
                        <h1 className='text-[#29494C]'>Характеристики:</h1>

                        <span className='flex justify-between'>
                            <p className='text-xs md:text-sm text-[#29494C]'>Тип:</p>
                            <p className='text-xs md:text-sm text-[#29494C]'>С/Х</p>
                        </span>

                        <span className='flex justify-between'>
                            <p className='text-xs md:text-sm text-[#29494C]'>для чего подходит:</p>
                            <p className='text-xs md:text-sm text-[#29494C]'>Туристическое обслуживание, Сельхоз деятельность, Малоэтажное строительство</p>
                        </span>

                        <span className='flex justify-between'>
                            <p className='text-xs md:text-sm text-[#29494C]'>Площадь:</p>
                            <p className='text-xs md:text-sm text-[#29494C]'>6 соток</p>
                        </span>

                        <span className='flex justify-between'>
                            <p className='text-xs md:text-sm text-[#29494C]'>До моря:</p>
                            <p className='text-xs md:text-sm text-[#29494C]'>1 км</p>
                        </span>

                        <span className='flex justify-between'>
                            <p className='text-xs md:text-sm text-[#29494C]'>До лечебных озер:</p>
                            <p></p>
                        </span>

                        <span className='flex justify-between'>
                            <p className='text-xs md:text-sm text-[#29494C]'>До дороги:</p>
                            <p></p>
                        </span>

                        <span className='flex justify-between'>
                            <p className='text-xs md:text-sm text-[#29494C]'>Кадастр:</p>
                            <p className='text-xs md:text-sm text-[#29494C]'>90:10::110301:42 (1/2/3)</p>
                        </span>

                        <span className='flex justify-between'>
                            <p className='text-xs md:text-sm text-[#29494C]'>Собственность:</p>
                            <p className='text-xs md:text-sm text-[#29494C]'>Общедолевая (16 участков на 1 га)</p>
                        </span>

                        <span className='flex justify-between'>
                            <p className='text-xs md:text-sm text-[#29494C]'>Коммуникации:</p>
                            <p className='text-xs md:text-sm text-[#29494C]'>400 м от границы нарезки</p>
                        </span>
                    </div>
                </div>

                <div className='flex flex-col gap-5 border rounded-xl border-[#4E2D0A29] p-5 mb-10'>
                    <h1 className='text-xl text-[#29494C]'>Описание участка:</h1>
                    <ol className='text-[#29494C]'>— Общая площадь поселка 11,5 га</ol>
                    <ol className='text-[#29494C]'>— На берегу есть озеро с голубой грязью</ol>
                    <ol className='text-[#29494C]'>— До парка Бакальская коса 10 км</ol>
                    <ol className='text-[#29494C]'>— Планируется присоединение первой береговой линии к.с. Аврора и перевод в ИЖС</ol>
                </div>

                <div className='flex flex-col gap-5 border rounded-xl border-[#4E2D0A29] p-5 mb-10'>
                    <h1 className='text-xl text-[#29494C]'>Инвестиции в участок:</h1>
                    <ol className='text-[#29494C]'>— Инвестиции от 5 лет</ol>
                    <ol className='text-[#29494C]'>— Перевод в ИЖС за счет расширения</ol>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3'>
                    <img src={map1} alt="map" className='rounded-xl w-full filter brightness-95 contrast-90 saturate-90 sepia-[0.05]' loading='lazy' />
                    <img src={map2} alt="map" className='rounded-xl w-full filter brightness-95 contrast-90 saturate-90 sepia-[0.05]' loading='lazy' />
                    <img src={map3} alt="map" className='rounded-xl w-full filter brightness-95 contrast-90 saturate-90 sepia-[0.05]' loading='lazy' />
                </div>

            </div>
        </div>
    )
}

export default LearnMore