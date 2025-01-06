import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NewNavbar from './components/NewNavbar';

const MainLayout = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <NewNavbar></NewNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;