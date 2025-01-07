import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './components/Footer';
import NewNavbar from './components/NewNavbar';

const MainLayout = () => {
    return (
        <div>
           
            <NewNavbar></NewNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;