import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from './Avatar';


export const NavBar = () => {
  return (
    <>
      <nav className="bg-white z-99 border-gray-200 border-b-2 ">
        <div className="max-w-screen-xl flex  items-center  justify-between mx-auto p-4">
            <div>
              <Link  to={"/"} ><span className="self-center text-2xl  font-semibold whitespace-nowrap dark:text-white">Flowbite</span></Link>
            </div>
          <div className="flex items-center  space-x-3 ">
            
            <button type="button" className="hidden md:block text-gray-600 bg-gray-100 hover:shadow-lg  font-regular rounded-full text-sm px-6 py-2 text-center">My Team</button>
            <button type="button" className=" hidden md:block text-gray-700  bg-yellow-200 hover:shadow-lg  font-regular rounded-full text-sm px-6 py-2 text-center">+ Add Listing</button>
            <Avatar></Avatar>
          </div>
         
        </div>
      </nav>

    </>
    
  );
}


            // <Link Link to={"/"} >
            //   <span className=" text-2xl font-semibold  dark:text-white">Flat<span className='text-green-600 font-semibold'>Mate</span></span>
            // </Link>

      //       <div className="flex bg-blue-400 gap-5 items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      //   <button type="button" className="hidden md:block text-gray-600 bg-gray-100 hover:shadow-lg  font-regular rounded-full text-sm px-6 py-2 text-center">My Team</button>
      //   <button type="button" className=" hidden md:block text-gray-700  bg-yellow-200 hover:shadow-lg  font-regular rounded-full text-sm px-6 py-2 text-center">+ Add Listing</button>
      
      // <div className='w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center'>
      //   P
      //     </div>
      // </div>