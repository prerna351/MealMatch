import React from 'react';
import { NavBar } from '../components/NavBarComponent';
import { GetStarted } from '../components/GetStarted';
import { Search } from '../components/SearchBar/Search';
import { Link } from 'react-router-dom';


export const Landing = () => {
  return (
    <div className='overflow-x-clip'>

        <div className='w-screen  bg-white sticky top-0 z-50'>
          <NavBar></NavBar>
        </div>

        <div className='w-screen mx-auto py-4 flex flex-col justify-center items-center  '>
          <div className=' max-w-3xl  flex flex-col mt-12 mx-6 md:mx-0 items-center gap-1 py-10'>
            <div className='bg-pink-200 text-center w-72 rounded-full px-2 py-1  font-medium'><p >Trusted & loved by million users</p></div>
            <div><h1 className='text-4xl md:text-6xl text-center font-semibold  mt-11 '>Find compatible flatmates Rooms & PGs</h1></div>
            <div className='mt-4 mb-7 text-gray-500 '><p>Share your room with right roommates</p></div>
            <div className='w-full '><Search></Search></div>
            <div className='mt-2 text-gray-600 z-0 flex items-center'>
              <span className='mr-2'>Top cities:</span>
              <Link to={'/city/Banglore'}><span className='text-gray-400 underline'>Banglore,</span></Link>
              <Link to={'/city/Hyderabad'}><span className='mx-1.5 text-gray-400 underline'>Hyderabad,</span></Link>
              <Link to={'/city/Pune'}><span className='text-gray-400 underline mr-2'>Pune</span></Link>
              <Link to={'/city/all'}><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-green-600">
                    <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                  </svg>
              </span>
              </Link>
              </div>
          </div>
        </div>

        <div className='relative w-screen flex flex-col py-28 justify-center items-center '>
            <GetStarted />
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