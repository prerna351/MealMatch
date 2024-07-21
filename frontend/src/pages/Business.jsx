import React from 'react';
import { NavBar } from '../components/NavBarComponent';
import { ProgressComponent } from '../components/ProgressComponent';
import { FormComponent } from '../components/FormComponent';


export const Business = () => {
  return (
    <div>
        <div className="h-screen overflow-auto ">
        <NavBar></NavBar>
            <div className=" flex justify-center mt-4 p-10 max-w-screen w-full  ">
              {/* <div className="backButton"></div> */}
              <div className='flex justify-center items-center gap-3  max-w-5xl py-16 px-52'>
                  {/* left  */}
                      <ProgressComponent></ProgressComponent>
                  {/* right  */}
                  <div className='col-span-8   ml-7'>
                      <FormComponent ></FormComponent>
                  </div>
               </div>
            </div>
        </div>
    </div>
  );
}


