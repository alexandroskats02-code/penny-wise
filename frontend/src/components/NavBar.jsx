import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import Dollar from '../assets/dollar.png';

import { CircleUser, House } from 'lucide-react';

export default function NavBar() {
  return (
    <nav className='navbar sticky top-2 mt-2 py-4 rounded-full w-full px-6 grid grid-cols-3 items-center justify-between z-20 bg-[var(--nav-bg)] text-[var(--text)] border border-[var(--nav-border)] shadow-[var(--nav-shadow)] backdrop-blur-md backdrop-saturate-150 transition-all'>
      <Link to='/' className='relative'>
        <button className='w-9 h-9 flex items-center justify-center rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-800'>
          <House />
        </button>
      </Link>
      <Link
        to='/dashboard'
        className='text-xl font-bold justify-self-center relative'
      >
        <img src={Dollar} alt='$' className='w-10 h-10 inline-block' />
        <span className='ml-2'>Penny Wise</span>
      </Link>
      <div className='flex gap-4 items-center justify-end relative'>
        <ThemeToggle />
        <Link to='/profile'>
          <CircleUser />
        </Link>
        <Link to='/signup'>
          <button className='px-4 py-2 bg-[var(--accent-bold)] text-white transition-colors hover:bg-gray-500 dark:hover:bg-gray-800'>
            Sign Up
          </button>
        </Link>
        <Link to='/login'>
          <button className='px-4 py-2 bg-[var(--accent-bg)] text-[var(--text)] transition-colors hover:bg-gray-100 dark:hover:bg-gray-800'>
            Log In
          </button>
        </Link>
      </div>
    </nav>
  );
}
