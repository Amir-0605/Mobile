import { useState } from 'react'

const Footer = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='bg-[#D9D9D9]'>
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
                <div className='pb-15 pt-10 flex flex-col gap-3'>
                    <h1 className='text-center'>7-(978)995-75-05</h1>
                    <button onClick={() => setOpen(true)} className='bg-[#9E8470E5] text-[#29494C] rounded-3xl p-3'>Связаться с нами</button>
                </div>
            </div>
        </div>
    )
}

export default Footer