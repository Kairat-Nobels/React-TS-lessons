import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export const Layout: React.FC = () => {
    return (
        <div>
            <h1 className="font-bold text-2xl text-center p-5">REACT - TYPESCRIPT - TAILWIND</h1>
            <nav className='h-[50px] flex justify-around items-center px-5 bg-sky-300 text-neutral-800 font-medium'>
                <NavLink className={({ isActive }) => (isActive ? 'font-bold text-lg text-red-600' : 'hover:text-red-500')} to={'/'}>Products</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'font-bold text-lg text-red-600' : '')} to={'/about'}>About</NavLink>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
