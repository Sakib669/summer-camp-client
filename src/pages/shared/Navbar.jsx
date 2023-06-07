import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navItems = <>
        <li className='hover:text-primaryClr'><Link>Home</Link></li>
        <li className='hover:text-primaryClr'><Link>Instructors</Link></li>
        <li className='hover:text-primaryClr'><Link>Classes</Link></li>
        <li className='hover:text-primaryClr'><Link>Dashboard</Link></li>
        <li className='hover:text-primaryClr'><Link to='/login'>Login</Link></li>
        <li className='hover:text-primaryClr'><Link>
            <div className="avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
        </Link></li>
    </>
    return (
        <nav className="navbar bg-base-200 items-center px-16 mb-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;