import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { AiOutlineArrowDown } from 'react-icons/ai';

const apikey = process.env.REACT_APP_NASA_KEY;

const NasaPhoto = () => {
   const [photoData, setPhotoData] = useState(null);

   useEffect(() => {
      fetchPhoto();

      async function fetchPhoto() {
         const response = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=${apikey}`
         );
         const data = await response.json();
         console.log(data);
         setPhotoData(data);
      }
   }, []);

   if (!photoData) return <div>Loading...</div>;

   return (
      <>
         <div>
            {photoData.media_type === 'image' ? (
               <img
                  className=' absolute object-cover h-screen w-full'
                  src={photoData.url}
                  alt={photoData.title}
               />
            ) : (
               <iframe
                  title='space-video'
                  src={photoData.url}
                  allowFullScreen
                  gesture='media'
                  allow='encrypted-media'
                  className='photo'
               />
            )}
         </div>
         <NavBar />
         <div className='absolute z-10 bottom-[0%] top-[73%] overflow-scroll p-6 m-6 shadow-lg shadow-cyan-200/50 rounded'>
            <div className='flex justify-between items-center'>
               <h1 className='text-3xl mt-4'>{photoData.title}</h1>
               <AiOutlineArrowDown className=' text-2xl mt-4' />
            </div>
            <p className='mt-4'>{photoData.date}</p>
            <p className='mt-4 overflow-hidden tracking-wide'>
               {photoData.explanation}
            </p>
         </div>
      </>
   );
};

export default NasaPhoto;
