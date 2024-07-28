import React from 'react';
import { useNavigate } from 'react-router-dom';

export const CityCard = ({image_link, city_name}) => {
    const navigate = useNavigate();
  return (
    <>
      <figure onClick={() => navigate(`/city/${city_name}`) } className="w-full bg-gray-100 rounded-lg overflow-hidden relative transform hover:scale-105 transition duration-200 cursor-pointer shadow-md hover:shadow-xl h-32 sm:h-40 md:h-52">
        <img src={image_link} alt="delhi" className='w-full object-cover' />
        <div className="absolute bottom-0 -left-0 w-full h-1/2 black-gradien-bg text-white uppercase font-medium text-center text-xs sm:text-sm pb-2 md:text-lg flex justify-center items-end md:pb-3 z-10">{city_name}</div>
      </figure>
      
    </>
  );
}

