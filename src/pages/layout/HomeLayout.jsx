import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';

const HomeLayout = () => {
    return (
        <main>
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    );
};

export default HomeLayout;