import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContactCard from '../components/Cards/ContactCard';
import { cityData } from '../data';
import { NavBar } from '../components/NavBarComponent';
import Carousel from '../components/carousal/Carousel';

export const ProfilePage = () => {
    const {city_name} = useParams();
    const {provider_id} = useParams();
    const [providers, setProviders] = useState([]);
    useEffect(() => {
      if (city_name) {
        const cityProviders = cityData[city_name.toLowerCase()] || [];
        setProviders(cityProviders[provider_id-1]);
        
      }
    }, [city_name]);
    
  return (
    <div className='overflow-x-clip'>
      <div className='w-screen bg-white sticky top-0 z-50'>
        <NavBar />
      </div>
      

      
        <div className='w-full flex  flex-col  items-center '>
          <div className='hidden md:block w-full max-w-screen-sm md:max-w-[1100px] pb-6 mt-8'>Home </div>
          <div className='grid grid-cols-1 md:grid-cols-12 md:space-x-5 md:gap-4 w-full   max-w-screen-sm md:max-w-[1100px] h-screen '>
             
             {/* left  */}
              <div className='col-span-3  '>
                <ContactCard 
                name={providers.name}
                streetAddress={providers.streetAddress}
                city={providers.city}
                state={providers.state}
                ></ContactCard>
              </div>

              {/* right  */}
              <div className='col-span-9  rounded-lg p-8 shadow-lg border '>
                <div className='hidden md:block'>
                  <h1 className='text-2xl font-semibold mb-4'>Location</h1>
                  <p className='relative '>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="text-gray-400  w-6 h-6 absolute left-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className='ml-7'>{providers.streetAddress},</span>
                    <span className='ml-1'>{providers.city},</span>
                    <span className='ml-1'>{providers.state}</span>
                  </p>
                </div>

                <div className='hidden md:block my-10 w-full h-[2px] bg-gray-100 rounded-lg'></div>

                <div>
                  <h1 className='text-2xl font-semibold mb-4'>Basic Information</h1>
                  <div  className='flex gap-10 mb-4'>
                    <div className="mealtype w-60">
                      <h3 className='text-gray-500 text-sm'>Meal Type</h3>
                      <p className='font-medium text-lg'>{providers.mealType}</p>
                    </div>
                    <div className="prices w-60">
                      <h3 className='text-gray-500 text-sm'>Charges</h3>
                      <p className='font-medium text-lg'>{providers.charges}</p>
                    </div>
                  </div>
                  <div className='flex gap-10'>
                    <div className="working days w-60">
                      <h3 className='text-gray-500 text-sm'>Service Days</h3>
                      <p className='font-medium text-lg'>{providers.workingDays}</p>
                    </div>
                    <div className="meal timing w-60">
                      <h3 className='text-gray-500 text-sm'>Meal Timing</h3>
                      <p className='font-medium text-lg'>{providers.mealTimings}</p>
                    </div>
                  </div>
                </div>

                <div className='my-10 w-full h-[2px] bg-gray-100 rounded-lg'></div>

                {/* pictures  */}
                <div className="pictures w-full  ">
                  <h1 className='text-2xl font-semibold  mb-4'>Pictures</h1>
                  <div className='carousal rounded-md'>
                    <Carousel></Carousel>
                  </div>
                </div>

                <div className='mt-5 mb-10 w-full h-[2px] bg-gray-100 rounded-lg'></div>

                {/* terms & condition  */}
                <div>
                  <h1 className='text-2xl font-semibold mb-4'>Terms & Conditions</h1>
                  <p>{providers.terms_condition}</p>
                </div>
              </div>
          </div>
        </div>
      
      
    </div>
  );
}


       