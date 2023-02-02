import React from 'react';
import { Link } from 'react-router-dom';
import earth from '../assets/earth.mp4';

const Home = () => {
   return (
      <div className='border-4 '>
         <video
            src={earth}
            alt='earth-video'
            loop
            className='object-cover h-screen'
            type='video/mp4'
            muted
            autoPlay
            controls={false}
         />
         <Link
            to='/nasaphoto'
            className='absolute rounded-xl px-4 py-2 hover:shadow-lg hover:shadow-cyan-200/50 hover:text-cyan-200  top-[5%] left-[35%] text-3xl tracking-wide '
         >
            See in the stars !
         </Link>
      </div>
   );
};

export default Home;
