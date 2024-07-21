import React from 'react';

export const Search = () => {
  return (
    <div>
      
<form className="max-w-lg mx-auto ">
    <div className="flex">
            
        
        <div className="relative  w-full">
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute top-3 left-3 text-gray-300 size-6">
            <path fill-rule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clip-rule="evenodd" />
            </svg>

            <input type="search"  className=" shadow-md border border-spacing-2 py-4 px-10 w-full  text-sm text-gray-900 bg-gray-100 rounded-full  focus:outline-none placeholder:text-center " placeholder="Search places" required />
            
        </div>
    </div>
</form>

    </div>
  );
}


