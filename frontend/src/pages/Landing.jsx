import React from 'react';
import { NavBar } from '../components/NavBarComponent';
import { TiffinFeature } from '../components/TiffinFeatureComponent';
import { Search } from '../components/Search';

export const Landing = () => {
  return (
    <div className='overflow-x-hidden'>

        <div className='w-screen bg-white sticky top-0 z-50'>
          <NavBar></NavBar>
        </div>

        <div className='w-screen  mx-auto  flex flex-col justify-center items-center  '>
          <div className=' max-w-3xl  flex flex-col mt-16 mx-6 md:mx-0 items-center gap-1 py-10'>
            <div className='bg-pink-200 text-center w-72 rounded-full px-2 py-1  font-medium'><p >Trusted & loved by million users</p></div>
            <div><h1 className='text-4xl md:text-6xl text-center font-semibold  mt-11 '>Find compatible flatmates Rooms & PGs</h1></div>
            <div className='mt-4 mb-7 text-gray-500 '><p>Share your room with right roommates</p></div>
            <div className='w-full '><Search></Search></div>
            <div className='mt-1 text-gray-600 z-0'><span>Top cities:</span> <span>Banglore, Hyderabad</span></div>
          </div>
        </div>

        <div className='overscroll-none relative w-screen  flex flex-col py-28 justify-center items-center '>
            <TiffinFeature></TiffinFeature>
        </div>
    </div>
  );
}


      // <div className="h-screen overflow-hidden ">
      //     <NavBar></NavBar>
      //   <div className="flex justify-center items-center bg-gray-50 h-full  ">
      //   {/* <TiffinFeature></TiffinFeature> */}
      //   </div>
      // </div>