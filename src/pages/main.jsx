import { createRoot } from 'react-dom/client';
import '../assets/styles/index.css';
import NavBar from '../components/NavBar';
import Profile from '../components/Profile';
import Messages from '../components/Messages';
import Shipping from '../components/Shipping';
import Products from '../components/Products';
import CreateProduct from '../components/CreateProduct';
import TopSeller from '../components/TopSeller';
import Orders from '../components/Orders';


createRoot(document.getElementById('root')).render(
  <>
  <header className='h-full'>
    <NavBar />
  </header>
  <main className='flex flex-row w-full gap-8 p-8'>
    <div className='flex flex-col gap-4 flex-1 w-96'>
      <Profile />
      <Messages />
      <Shipping />
    </div>
    <div className='flex flex-col gap-4 flex-1 max-w-80'>
      <Products />
    </div>
    <div className='flex flex-col gap-4 flex-1'>
      <CreateProduct />
      <div className='flex flex-row gap-8'>
        <TopSeller />
        <Orders />
      </div>
    </div>
  </main>
  </>
);
