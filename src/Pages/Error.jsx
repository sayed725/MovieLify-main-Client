import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex justify-center items-center gap-10 flex-col mt-[100px]'>
            <h1 className='text-5xl text-center'>Error</h1>
            <p className='text-5xl text-center'>404</p>
            <p className='text-5xl text-center'> Not Found </p>

           <Link className='btn rounded-md text-white bg-[#ff4545] hover:bg-[#ff4545] hover:text-black' to="/">Back To Home</Link>
        </div>
    );
};

export default Error;