import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <main>
            <Navbar />
            <Outlet />
        </main>
    );
};

export default HomeLayout;