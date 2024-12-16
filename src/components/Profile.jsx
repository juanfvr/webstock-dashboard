import '../assets/styles/index.css';
import shareIcon from '../assets/icons/shareIcon.svg';
import editIcon from '../assets/icons/editIcon.svg'

export default function Profile() {
    return (
        <>
            <section className='flex flex-col gap-4 bg-slate-100 h-fit min-w-[120px] rounded-tl-2xl rounded-br-2xl shadow-sm'>
                <div id='title' className='bg-green-500 w-fit px-4 rounded-tl-2xl rounded-br-2xl text-white font-medium text-2xl'>
                    <h1>Perfil</h1>
                </div>
                <div className='flex flex-col gap-4 px-4 pb-4'>
                    <div id='user info' className='flex flex-row justify-between bg-white p-2 rounded-lg shadow-sm'>
                        <div className='flex flex-row gap-4'>
                            <img className='bg-slate-400 w-20 h-20 rounded-full' src="" alt="" />
                            <div className='flex flex-col self-center'>
                                <span className='font-bold text-xl'>@username</span>
                                <span className='opacity-75 text-lg'>descrição</span>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between pr-2'>
                            <a href="#"><img className='min-w-8 hover:scale-[105%] transition-transform' src={shareIcon} alt="share icon" /></a>
                            <a href="#"><img className='min-w-8 hover:scale-[105%] transition-transform' src={editIcon} alt="edit icon" /></a>
                        </div>
                    </div>
                    <div id='user stats' className='flex flex-col w-full'>
                        <div className='self-center'>
                            <div className='flex flex-row gap-8'>
                                <div className='flex flex-col'>
                                    <span className='text-green-500'>Data de criação:</span>
                                    <span>01/01/2024</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-green-500'>Ganhos:</span>
                                    <span>R$9,658,00</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-green-500'>Assinante premium:</span>
                                    <span>Não</span>
                                </div>
                            </div>
                            <div className='flex flex-row gap-8'>
                                <div className='flex flex-col'>
                                    <span className='text-green-500'>N° de produtos:</span>
                                    <span>48</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-green-500'>Lucros:</span>
                                    <span>R$4,256,00</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-green-500'>Última venda:</span>
                                    <span>2h atrás</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}