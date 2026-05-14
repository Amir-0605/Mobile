import { useState } from 'react'
import { CiCircleChevLeft } from 'react-icons/ci'
import { Link } from 'react-router-dom'

const LearnMore = () => {
    const [open, setOpen] = useState(false);
    const images = [
        "/6919b57f96876f787637a902ea4e5888eb47ebb1.jpg"
    ]
    const img1 = [
        "/5c91009a986673d420b83357c52960b33812f7a2.jpg"
    ]
    const img2 = [
        "/a5f315016b726a77a832f96c8b6d0e8136c43dda.jpg"
    ]
    const img3 = [
        "/282966dd86f5ccb8a3dda15ed4babf3bcab05a8c.jpg"
    ]
    return (


        <div className='container'>
            <div>

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
            <div className='pt-10'>
                <Link to={'/filter'}><CiCircleChevLeft className="text-[#29494C] mb-4" /></Link>
                <div>
                    <h1 className='text-lg text-[#29494C] mb-4'>Участок Бакальская 1 (Аврора)</h1>
                    <div>
                        <img src={images} alt="img" className='w-[300px] rounded-3xl h-[250px] mb-4' />
                        <div>
                            <span>
                                <h1 className='text-[#29494C]'>500 000 ₽ </h1>
                                <p className='text-[#29494C]'>6 Соток</p>
                            </span>
                            <div className='flex justify-center'>
                                <button onClick={() => setOpen(true)} className='bg-[#F7E2CCB2] rounded-3xl text-[#29494C] p-4'>Связаться с нами</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#FFFFFF88] border border-[#4E2D0A29] rounded-2xl flex mb-10 mt-5 gap-3'>
                    <div className='flex flex-col gap-5 p-3'>
                        <h1 className='text-[#29494C]'>Характеристики:</h1>
                        <span className='flex justify-between'>
                            <p className='text-xs text-[#29494C]'>Тип:</p>
                            <p className='text-xs text-[#29494C]'>С/Х</p>
                        </span>
                        <span className='flex justify-between'>
                            <p className='text-xs text-[#29494C]'>Площадь:</p>
                            <p className='text-xs text-[#29494C]'>6 соток</p>
                        </span>
                        <span className='flex justify-between'>
                            <p className='text-xs text-[#29494C]'>До моря:</p>
                            <p className='text-xs text-[#29494C]'>1 км</p>
                        </span>
                        <span className='flex justify-between'>
                            <p className='text-xs text-[#29494C]'>Кадастр:</p>
                            <p className='text-xs text-[#29494C]'>90:10::110301:42 (1/2/3)</p>
                        </span>
                        <span className='flex justify-between'>
                            <p className='text-xs text-[#29494C]'>Собственность:</p>
                            <p className='text-xs text-[#29494C]'>Общедолевая (16 участков на 1 га)</p>
                        </span>
                        <span className='flex justify-between'>
                            <p className='text-xs text-[#29494C]'>Коммуникации:</p>
                            <p className='text-xs text-[#29494C]'>400 м от границы нарезки</p>
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
                <div>
                    <img src={img1} alt="map" className='mb-10' />
                    <div className='pb-10'>
                        <img src={img2} alt="map" className='mb-10' />
                        <img src={img3} alt="map" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearnMore