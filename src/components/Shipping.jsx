import '../assets/styles/index.css';

export default function Shipping() {
    return (
        <>
            <section className='flex flex-col gap-4 bg-slate-100 h-[250px] min-w-[120px] rounded-tl-2xl rounded-br-2xl shadow-sm'>
                <div id='title' className='bg-green-500 w-fit px-4 rounded-tl-2xl rounded-br-2xl text-white font-medium text-2xl'>
                    <h1>Envios</h1>
                </div>
                <div  id='messages' className='flex flex-col px-2 pb-2 overflow-auto h-3/4 gap-2'>
                <Message />
                <Message />
                <Message />
                <Message />
                </div>
            </section>
        </>
    )
}

function Message() {
    return (
        <>
            <div className='flex flex-row bg-white gap-2 h-fit p-2 rounded-lg shadow-sm'>
                <div className='flex flex-col whitespace-pre overflow-hidden'>
                    <span>📦 O produto “xxxxxxx” acaba de ser despachado. </span>
                    <p className='opacity-75'>Acompanhe pelo código de rastreio #XXXXXXXXXXX.</p>
                </div>
            </div>
        </>
    )
}