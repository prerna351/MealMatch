import React, { useState } from 'react';

export const SortButton = () => {
    const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div className='hidden lg:block'>

        <button onClick={() => setShowDropDown(!showDropDown)} className="relative  border border-gray-500 text-gray-500  bg-white  rounded-full text-sm px-6 py-3 text-center inline-flex items-center" type="button">Sort<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
        </button>


        <div  className={`absolute z-10 ${showDropDown ? "block":"hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 `}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li className='block px-4 py-2 hover:bg-gray-100'>
                Charges- low to high
            </li>
            <li className='block px-4 py-2 hover:bg-gray-100'>
                Charges- high to low
            </li>
            <li className='block px-4 py-2 hover:bg-gray-100'>
                ratings- high to low
            </li>
            </ul>
        </div>

    </div>
  );
}

