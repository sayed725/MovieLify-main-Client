import React from 'react';
import Banner from '../components/Banner';
import ShowMovies from '../components/ShowMovies';
import LeatestNews from '../components/LeatestNews';
import Trending from '../components/Trending';
import Darkmode from '../components/Darkmode';

const Home = () => {
    return (
        <div className='dark:bg-[#1b1d24]'>
            <div>
                <Darkmode></Darkmode>
            </div>
           <div>
           <Banner></Banner>
           </div>
           <div className='py-5 sm:py-[50px]'>
            <ShowMovies></ShowMovies>
           </div>
           <div className='py-5 sm:py-[50px]'>
            <Trending></Trending>
           </div>
           <div className='py-5 sm:py-[50px]' >
            <LeatestNews></LeatestNews>
           </div>
        </div>
    );
};

export default Home;