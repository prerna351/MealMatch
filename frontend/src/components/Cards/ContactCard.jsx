import React from 'react';

const ContactCard = ({name, city, state, streetAddress}) => {
  return (
    <>
        <div className=" w-full max-w-screen-sm h-full md:h-auto bg-white border border-gray-200 md:rounded-lg md:shadow ">
    
    <div className="flex flex-col items-center p-10">
        <img className="w-28 h-28 md:w-32 md:h-32 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="profile_image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
        
        <div className="flex gap-4 mt-6 md:mt-6">
            <button type="button" className="flex justify-between items-center text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-white mr-2">
                <path fill-rule="evenodd" d="M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 0 1-.522 1.756.75.75 0 0 0 .584 1.143 5.976 5.976 0 0 0 3.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
              </svg>
              <span>Chat</span></button>

            <button type="button" className="flex justify-between items-center text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-white mr-2">
                <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clip-rule="evenodd" />
              </svg>
              <span>Call</span></button>
        </div>
        <div className='mt-4 block md:hidden '>
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
                    <span className='ml-7 text-gray-500'>{streetAddress},</span>
                    <span className='ml-1 text-gray-500'>{city},</span>
                    <span className='ml-1 text-gray-500'>{state}</span>
              </p>
        </div>
    </div>
</div>
 
    </>
  );
}

export default ContactCard;
