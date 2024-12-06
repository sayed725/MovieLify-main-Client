import React from 'react';
import Banner from '../components/Banner';
import ShowMovies from '../components/ShowMovies';
import LeatestNews from '../components/LeatestNews';
import Trending from '../components/Trending';

const Home = () => {
    return (
        <div>
           <div>
           <Banner></Banner>
           </div>
           <div className=' bg-[#1b1d24] py-5 sm:py-[50px]'>
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