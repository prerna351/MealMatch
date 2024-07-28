import React from 'react';

export const Search_basic = () => {
  return (
    <>
      
        <form className=" w-full max-w-screen-lg ">
            <div className="flex  ">
                    
                
                <div className="relative w-full">

                    <input type="search"  className=" border border-gray-500 py-3 px-10 w-full text-sm text-gray-800 bg-white rounded-full  focus:outline-none placeholder:text-gray-500 " placeholder="Search places"  />

                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute top-3 left-3 text-gray-400 size-5">
                    <path fill-rule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clip-rule="evenodd" />
                    </svg>

                    <div className='absolute top-1.5 right-3 rounded-full w-8 h-8 border border-gray-300 flex justify-center items-center'>
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className=" text-gray-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
                    </div>
                    
                </div>
            </div>
        </form>

    </>
  );
}


