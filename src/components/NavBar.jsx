import '../assets/styles/index.css';
import cartIcon from '../assets/icons/cartIcon.svg';
import graphicIcon from '../assets/icons/graphicIcon.svg';
import listIcon from '../assets/icons/listIcon.svg';
import packageIcon from '../assets/icons/packageIcon.svg';
import userIcon from '../assets/icons/userIcon.svg';
import settingsIcon from '../assets/icons/settingsIcon.svg';


const navbarProps = {
    class: `
    flex flex-col justify-between 
    min-h-full w-16 hover:w-52 p-4 
    overflow-hidden bg-green-500
    transition-all duration-300 ease-in-out
    `
}

const linkProps = {
    class: `
    flex flex-row gap-4 text-2xl text-white font-semibold
    hover:scale-[105%] transition-all ease-in-out duration-200
    `
}

export default function NavBar() {
    return (
        <>
            <nav id='NavBar'
                className={navbarProps.class}>
                <div id="NavLinks"
                    className='flex flex-col gap-4'>
                    <div>
                        <a href="#" className={linkProps.class}>
                            <img src={listIcon} alt="list icon" className='max-w-[32px] max-h-[32px]' />
                            <span>Início</span> 
                        </a>
                    </div>
                    <div>
                        <a href="#" className={linkProps.class}>
                            <img src={packageIcon} alt="list icon" className='max-w-[32px] max-h-[32px]' />
                            <span>Estoque</span>
                        </a>
                    </div>
                    <div>
                        <a href="#" className={linkProps.class}>
                            <img src={cartIcon} alt="list icon" className='max-w-[32px] max-h-[32px]' />
                            <span>Envios</span>
                        </a>
                    </div>
                    <div>
                        <a href="#" className={linkProps.class}>
                            <img src={graphicIcon} alt="list icon" className='max-w-[32px] max-h-[32px]' />
                            <span>Dashboard</span>
                        </a>
                    </div>

                </div>
                <div id="UserSettings" className='flex flex-col gap-4'>
                    <div>
                        <a href="#" className={linkProps.class}>
                            <img src={userIcon} alt="list icon" className='max-w-[32px] max-h-[32px]' />
                            <span>Perfil</span>
                        </a>
                    </div>
                    <div>
                        <a href="#" className={linkProps.class}>
                            <img src={settingsIcon} alt="list icon" className='max-w-[32px] max-h-[32px]' />
                            <span>Definições</span>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}