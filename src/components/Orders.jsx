import '../assets/styles/index.css';

export default function Orders() {
    return (
        <>
            <section className='flex flex-col flex-1 gap-4 bg-slate-100 h-[480px] min-w-[120px] pb-4 rounded-tl-2xl rounded-br-2xl shadow-sm'>
                <div id='title' className='bg-green-500 w-fit px-4 rounded-tl-2xl rounded-br-2xl text-white font-medium text-2xl'>
                    <h1>Pedidos</h1>
                </div>
                <div id='products' className='flex flex-col px-2 pb-2 overflow-auto h-full gap-2'>
                    <Order />
                    <Order />
                    <Order />
                    <Order />
                    <Order />
                    <Order />
                    <Order />
                    <Order />
                </div>
            </section>
        </>
    )
}

function Order() {
    return (
        <>
            <div className='flex flex-row justify-between bg-white p-4 rounded-lg shadow-sm'>
                <div className='flex gap-2'>
                    <img className='bg-slate-400 w-12 h-12 rounded-md' src="" alt="" />
                    <div className='flex flex-col overflow-hidden'>
                        <span className='whitespace-pre'>@user.example fez um pedido</span>
                        <div className='flex gap-2'>
                            <span className='text-green-500'>Aceitar</span>
                            <span className='text-rose-600'>Recusar</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}