import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
    {
        path: "/",
        label: "Furniture",
    },
    {
        path: "/shop",
        label: "Shop",
    },
    {
        path: "/about",
        label: "About Us",
    },
    {
        path: "/contact",
        label: "Contact",
    }
]

const NavItems = () => {
    return (
        <ul className='flex flex-col md:flex-row items-center md:space-x-8 gap-8 '>
            {navItems.map((item, index) => (
                <li key={index} >
                    <NavLink to={item.path} className={({ isActive }) =>
                        isActive ? "text-primary font-bold" : "hover:text-primary"
                    }>{item.label}</NavLink>
                </li>
            ))}
        </ul>
    )
}

const Navbar = () => {
    return (
        <nav className='max-w-screen-2xl flex justify-between items-center py-6 px-4'>
            {/* logo */}
            <Link to="/" className='font-bold'>Logo</Link>
            <div className='hidden md:flex'>
                <NavItems />
            </div>
            <div>Cart</div>

        </nav>
    )
}

export default Navbar