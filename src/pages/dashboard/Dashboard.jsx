import React from 'react';
import Footer from '../shared/Footer';
import DashboardNavbar from './DashboardNavbar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <main>
            <DashboardNavbar/>
            <Outlet/>
            <Footer/>
        </main>
    );
};

export default Dashboard;