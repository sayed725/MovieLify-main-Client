import React from 'react';
import Banner from '../components/Banner';
import ShowMovies from '../components/ShowMovies';

const Home = () => {
    return (
        <div>
           <div>
           <Banner></Banner>
           </div>
           <div className='py-5 sm:py-[50px]'>
            <ShowMovies></ShowMovies>
           </div>
        </div>
    );
};

export default Home;