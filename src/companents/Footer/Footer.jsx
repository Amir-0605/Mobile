import { useState } from 'react'

const Footer = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='bg-[#D9D9D9] pb-5'>
            <div className='container'>
                <div>
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