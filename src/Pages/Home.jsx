import React from 'react';
import Banner from '../components/Banner';
import ShowMovies from '../components/ShowMovies';
import LeatestNews from '../components/LeatestNews';
import Trending from '../components/Trending';

import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className='dark:bg-[#1b1d24]'>

            
            <Helmet><title>Movielify | Home</title></Helmet>
            {/* <div>
                <Darkmode></Darkmode>
            </div> */}
           <div>
           <Banner></Banner>
           </div>
           <div className='py-5 sm:py-[50px]'>
            <ShowMovies></ShowMovies>
           </div>
           <div className=''>
            <Trending></Trending>
           </div>
           <div className='' >
            <LeatestNews></LeatestNews>
           </div>
        </div>
    );
};

export default Home;