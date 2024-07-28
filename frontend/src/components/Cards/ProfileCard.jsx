import React from 'react';

export const ProfileCard = () => {
  return (
    <div className='relative bg-white shadow-md md:max-w-lg w-full max-w-screen-md max-h-56 rounded-lg flex-1 border transform scale-100 md:hover:scale-105 transition-transform duration-200 cursor-pointer'>

      <div className="top max-h-44 flex rounded-tr-lg">

        <div className="photo flex-1 rounded-tl-lg max-w-40 min-w-36 overflow-clip">
          <img className=" object-contain " src="/2024072798945559844.webp" alt="image description"/>
        </div>

        <div className="details rounded-tr-lg p-4 w-full flex flex-col justify-between border-dashed border-b border-gray-300 ">
          <div>
            <p className='text-lg font-medium text-gray-700'>Neha</p>
            <p className='text-xs text-gray-600'>Bajirao Road Narayan...</p>
          </div>

          <div className='flex justify-between mt-4 md:mt-auto flex-wrap gap-4 md:gap-0'>
            <div className="mealtype flex flex-col ">
              <div className='text-xs text-gray-500'>Meal Type</div>
              <div className='text-sm'>Both</div>
            </div>
            <div className="rating flex flex-col ">
              <div className='text-xs text-gray-500'>rating</div>
              <div className='flex items-center text-sm'><p>5</p>
                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-yellow-500 ml-1">
                  <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clip-rule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="price flex flex-col ">
              <div className='text-xs text-gray-500'>Monthly</div>
              <div className='text-sm'>$2300</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom rounded-b-lg max-h-16 flex justify-between items-center px-4 py-3 md:py-2">
        <div className="distance text-sm text-gray-500">0.7 km from your search</div>
        <div className="contact flex gap-2">
          <div className="voice bg-cyan-50 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-cyan-700">
              <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clip-rule="evenodd" />
            </svg>

          </div>
          <div className="msg bg-cyan-50 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-cyan-700">
              <path fill-rule="evenodd" d="M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 0 1-.522 1.756.75.75 0 0 0 .584 1.143 5.976 5.976 0 0 0 3.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

