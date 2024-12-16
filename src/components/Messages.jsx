import '../assets/styles/index.css';

export default function Messages() {
    return (
        <>
            <section className='flex flex-col gap-4 bg-slate-100 h-64 min-w-[120px] rounded-tl-2xl rounded-br-2xl shadow-sm'>
                <div id='title' className='bg-green-500 w-fit px-4 rounded-tl-2xl rounded-br-2xl text-white font-medium text-2xl'>
                    <h1>Mensagens</h1>
                </div>
                <div id='messages' className='flex flex-col px-2 pb-2 overflow-auto h-3/4 gap-2'>
                <Message />
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
                <img className='bg-slate-400 min-w-12 min-h-12 rounded-md' src="" alt="" />
                <div className='flex flex-col whitespace-pre overflow-hidden'>
                    <span>@user-example</span>
                    <p className='opacity-75'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus maiores aperiam sint voluptas dolore commodi provident, ea velit. Corrupti asperiores eligendi iusto, voluptates dolor dicta totam amet distinctio voluptate non?</p>
                </div>
            </div>
        </>
    )
}