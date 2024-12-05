import React from 'react';
import Banner from '../components/Banner';
import ShowMovies from '../components/ShowMovies';
import LeatestNews from '../components/LeatestNews';

const Home = () => {
    return (
        <div>
           <div>
           <Banner></Banner>
           </div>
           <div className='py-5 sm:py-[50px]'>
            <ShowMovies></ShowMovies>
           </div>
           <div className='py-5 sm:py-[50px]' >
            <LeatestNews></LeatestNews>
           </div>
        </div>
    );
};

export default Home;