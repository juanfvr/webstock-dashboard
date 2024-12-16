import '../assets/styles/index.css';
import listIconGreen from '../assets/icons/listIconGreen.svg';
import trashIcon from '../assets/icons/trashIcon.svg';

export default function Products() {
    return (
        <>
            <section className='flex flex-col gap-4 bg-slate-100 h-full min-w-[120px] pb-4 rounded-tl-2xl rounded-br-2xl shadow-sm'>
                <div id='title' className='bg-green-500 w-fit px-4 rounded-tl-2xl rounded-br-2xl text-white font-medium text-2xl'>
                    <h1>Meus produtos</h1>
                </div>
                <div id='products' className='flex flex-col px-2 pb-2 overflow-auto h-full gap-2'>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </section>
        </>
    )
}

function Product() {
    return (
        <>
            <div className='flex flex-row justify-between bg-white p-4 rounded-lg shadow-sm'>
                <div className='flex gap-2'>
                    <img className='bg-slate-400 w-12 h-12 rounded-md' src="" alt="" />
                    <div className='flex flex-col max-w-32 overflow-hidden'>
                        <span className='whitespace-pre'>product nameeeeeeeeeeeeeee</span>
                        <span>R$00,00</span>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <img className='min-w-[24px] hover:scale-[105%] transition-all' src={listIconGreen} alt="" />
                    <img className='min-w-[24px] hover:scale-[105%] transition-all' src={trashIcon} alt="" />
                </div>
            </div>
        </>
    )
}