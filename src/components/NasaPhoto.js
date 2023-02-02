import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';

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
         <NavBar />
         <div>
            {photoData.media_type === 'image' ? (
               <img src={photoData.url} alt={photoData.title} />
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
            <div>
               <h1>{photoData.title}</h1>
               <p>{photoData.date}</p>
               <p>{photoData.explanation}</p>
            </div>
         </div>
      </>
   );
};

export default NasaPhoto;
