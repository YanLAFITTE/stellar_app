import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
   return (
      <div>
         <ul>
            <Link
               to='/'
               className='absolute mt-4 px-4 py-2 hover:shadow-lg rounded hover:shadow-cyan-200/50 hover:text-cyan-200 left-1/2 transform -translate-x-1/2  text-3xl tracking-wide '
            >
               Come Back To Earth
            </Link>
         </ul>
      </div>
   );
};

export default NavBar;
