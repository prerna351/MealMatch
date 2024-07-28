import React from 'react';
import { NavBar } from '../components/NavBarComponent';
import { CityCard } from '../components/Cards/CityCard';
import { useNavigate } from 'react-router-dom';

export const Cities = () => {
    
    
  return (
    <>
      <div className='overflow-x-clip'>
        <div className='w-screen bg-white sticky top-0 z-50'>
          <NavBar></NavBar>
        </div>
        
        <div className='w-full h-screen px-6 md:px-10 flex justify-center'>
            <div className='mt-20 w-full max-w-[1100px] h-screen'>

               <div className='flex justify-center font-bold text-3xl md:text-5xl pb-20'><h1>View Rooms in <span className='text-green-500 ml-1'>Popular Cities</span></h1></div>
               <div className='w-full grid grid-cols-3 gap-7 sm:grid-cols-4 md:gap-9 lg:grid-cols-5'>
                <CityCard image_link={"/cities/delhi.jpg"} city_name={"Delhi"} />
                <CityCard image_link={"/cities/mumbai.jpg"} city_name={"Mumbai"}/>
                <CityCard image_link={"/cities/hyderabad.jpg"} city_name={"Hyderabad"}/>
                <CityCard image_link={"/cities/jaipur.jpg"} city_name={"Jaipur"}/>
                <CityCard image_link={"/cities/kolkata.jpg"} city_name={"Kolkata"}/>
                <CityCard image_link={"/cities/delhi.jpg"} city_name={"Delhi"}/>
                <CityCard image_link={"/cities/jaipur.jpg"} city_name={"Jaipur"}/>
                <CityCard image_link={"/cities/kolkata.jpg"} city_name={"Kolkata"}/>
                <CityCard image_link={"/cities/delhi.jpg"} city_name={"Delhi"}/>
                <CityCard image_link={"/cities/jaipur.jpg"} city_name={"Jaipur"}/>
                <CityCard image_link={"/cities/kolkata.jpg"} city_name={"Kolkata"}/>
                <CityCard image_link={"/cities/delhi.jpg"} city_name={"Delhi"}/>
                
               </div>

                
                
            </div>
        </div>
        
    </div>
    </>
  );
}
