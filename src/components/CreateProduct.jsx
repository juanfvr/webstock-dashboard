import '../assets/styles/index.css';
import imageFormatIcon from '../assets/icons/imageFormatIcon.svg';
import trashRedIcon from '../assets/icons/trashRedIcon.svg';

export default function CreateProduct() {
    return (
        <>
            <section className='flex flex-col gap-4 bg-slate-100 h-64 min-w-[120px] rounded-tl-2xl rounded-br-2xl shadow-sm'>
                <div id='Adicionar produto' className='bg-green-500 w-fit px-4 rounded-tl-2xl rounded-br-2xl text-white font-medium text-2xl'>
                    <h1>Adicionar produto</h1>
                </div>
                <div id='product-creation' className='flex flex-col px-2 pb-2 overflow-auto h-full gap-2'>
                    <div className='p-4'>
                        <form action="" className='h-full'>
                            <div className='flex flex-col gap-2 h-full'>
                                <div className='flex flex-row gap-4'>
                                    <div className='flex flex-col flex-1'>
                                        <span className='text-lg'>Nome</span>
                                        <input className='p-2 rounded-md outline-none' type="text" name="" id="" />
                                    </div>
                                    <div className='flex flex-col w-28'>
                                        <span className='text-lg'>Preço</span>
                                        <input className='p-2 rounded-md outline-none' type="text" name="" id="" />
                                    </div>
                                </div>
                                <div className='flex flex-row gap-4'>
                                    <div className='flex flex-col'>
                                        <span className='text-lg'>Descrição</span>
                                        <input className='p-2 h-16 rounded-md outline-none' type="text" name="" id="" />
                                    </div>
                                    <div className='flex flex-row self-center mt-6 gap-2'>
                                        <div className='border-solid bg-transparent border-4 p-1 rounded-md border-green-500'>
                                            <img className='min-w-10 min-h-10' src={imageFormatIcon} alt="" />
                                        </div>
                                        <div className='border-solid bg-transparent border-4 p-1 rounded-md border-rose-600'>
                                            <img className='min-w-10 min-h-10' src={trashRedIcon} alt="" />
                                        </div>
                                        <div className='text-white bg-green-500 min-w-80 flex justify-center text-xl font-bold rounded-md'>
                                            <button type="submit">Adicionar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}