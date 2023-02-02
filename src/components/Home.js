import React from 'react';
import { Link } from 'react-router-dom';
import space from '../assets/space.jpg';

const Home = () => {
   return (
      <div className='border-2 border-cyan-200'>
         <img src={space} alt='space' className=' object-cover h-screen'/>
         <Link
            to='/nasaphoto'
            className='absolute rounded px-4 py-2 hover:shadow-lg hover:shadow-cyan-200/50 hover:text-cyan-200  text-3xl tracking-wide top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  '
         >
            Go To Space !
         </Link>
      </div>
   );
};

export default Home;
