
const State = () => {
    return (
        <div className='bg-[linear-gradient(90deg,#FFFFFF_0%,#99999999_100%)]'>
            <div className='container'>
                <h1 className='text-bold text-xl pt-10 border-b-1 pb-5'>Блок со статьями </h1>
                <ol className='list-demical pt-4'>
                    <li className='pb-4 flex flex-col gap-5'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <br />
                        <a href="https://www.pnp.ru/economics/gostevykh-domov-dlya-agroturistov-stanet-bolshe.html" className='text-[#29494C] border-b-1 w-35'>Ссылка на статью</a>
                    </li>
                    <li className='pb-4'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </li>
                    <li>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default State