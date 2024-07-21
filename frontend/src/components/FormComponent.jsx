


import React, { useState } from 'react';
import MapComponent from './MapComponent';
import { Button } from './Button';


export const FormComponent = ({label}) => {
   
    const [showMap, setShowMap] = useState(false);

    const handleMapClick = () => {
    setShowMap(!showMap);
}
    const [formData, setFormData] = useState({
        owner: "",
        businessName:"",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    }

  return (
    <div className='flex flex-col md:flex-row gap-10 p-8 rounded-md border border-gray-200 shadow-md min-w-96 bg-white'>
      {/* <h2>{label}</h2> */}
        <div className='w-96'>
            <form className="max-w-md mx-auto h-72" onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-5 group">
                    <input onChange={(e)=>{setFormData(e.target.value)}} type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                    <label  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Owner's Full Name</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
                    <label  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Business Name</label>
                </div>
                <button onClick={handleMapClick} className=" flex justify-around  w-full mt-9 py-2 rounded-md border-2 focus:text-green-600 focus:border-green-600 border-gray-300 text-gray-500">Add Business Location <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
                </span>
                </button>
                <div className='bg-red-300 '>
                    <Button label={"Proceed"}></Button>
                </div>
                
            </form>
        </div>

        {showMap && 
        <div className={`bg-green-300 w-96 h-72 transition-transform duration-5000 ease-in transform ${
          showMap ? 'translate-x-0' : 'translate-x-full'}`}>
            <MapComponent></MapComponent>
        </div>}
    </div>
  );
}


