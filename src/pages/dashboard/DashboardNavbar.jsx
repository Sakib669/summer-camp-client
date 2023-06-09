import React from 'react';
import useStudent from '../../hooks/useStudent';
import { Link, NavLink } from 'react-router-dom';

const DashboardNavbar = () => {
    const [isStudent, isStudentLoading] = useStudent();

    const navItems = <>
        <li className='hover:text-info'><NavLink to='/'>Home</NavLink></li>
        {
            isStudent &&
            <>
                <li className='hover:text-info'><NavLink to='/dashboard/studentClasses'>My Selected Classes</NavLink></li>
                <li className='hover:text-info'><NavLink to='/dashboard/studentEnrolledClasses'>My Enrolled Classes</NavLink></li>
                <li className='hover:text-info'><NavLink to='/dashboard/studentPaymentHistory'>My Enrolled Classes</NavLink></li>
            </>
        }
    </>

    return (
        <nav className="navbar bg-base-200 items-center px-16 mb-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2  shadow bg-base-100 rounded-box w-52 ">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-end hidden lg:flex items-center">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
        </nav>
    );
};

export default DashboardNavbar;