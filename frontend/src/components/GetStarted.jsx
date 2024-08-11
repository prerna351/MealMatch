import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './buttons/Button';

export const GetStarted = () => {
  return (
    <div className='grid grid-cols-1  lg:grid-cols-2 pt-4'>

      {/* left  */}
        <div className="max-w-xl  flex flex-col gap-6  ">
            <div className='flex flex-col h-full justify-center items-center'>
            <h1 className='text-3xl mx-4 md:mx-0 md:text-5xl  text-center font-semibold text-gray-800 mb-2 '>Join Our Platform as a Tiffin Service Provider</h1>
            <h4 className='text-md md:text-lg text-gray-600 mb-5 md:mb-9 text-center  px-5'>Register as a Local Tiffin Provider to offer your delicious home-cooked meals</h4>
            <div className=" flex flex-col items-center justify-around w-full ">
            
            <div className='p-3 '>
              <Link to={"/localProviderForm"}>
                  <Button label={"Get started"}></Button>
              </Link>
            </div>
          </div>
            </div>
        </div>


        {/* right  */}
        <div className="max-w-xl p-5  flex flex-col gap-6 ">

          {/* buisness */}
          {/* <div className=" w-full flex flex-col items-center justify-around ">
            <div className='p-3 '>
              <p className='w-96  text-center text-lg font-medium'>Register as a Business to reach more customers and grow your brand</p>
            </div>
          <div className='p-3 '>
            <Link to={"/businessForm"}>
              <Button label={"Business"}></Button>
            </Link>
          </div>
          </div> */}


            {/* local  */}
          {/* <div className=" flex flex-col items-center justify-around w-full ">
            <div className='p-3'>
              <p className='w-96  text-center text-lg font-medium'>Register as a Local Tiffin Provider to offer your delicious home-cooked meals</p>
            </div>
            <div className='p-3 '>
              <Link to={"/localProviderForm"}>
                  <Button label={"Local Provider"}></Button>
              </Link>
            </div>
          </div> */}

        </div>
    </div>
  );
}

 