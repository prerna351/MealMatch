import React, { useState } from 'react';
import { Heading } from '../Headings/Heading';

import { InputBox } from '../InputBoxes/InputBoxComponent';
import { RadioButton } from '../InputBoxes/RadioButton';
import { ImageUploaderComp } from '../InputBoxes/ImageUploaderComp';
import { Button } from '../buttons/Button';
import { useSetRecoilState } from 'recoil';
import { currentFormState } from '../../store/atoms/currentFormState';

export const MealForm = () => {
  const setForm = useSetRecoilState(currentFormState)
  const mealTypesState = {
    Vegetarian: false,
    "Both (as per customer demand)": false
  }

  const [selectedMealType, setSelectedMealType] = useState('');

  const handleTypeChange = (e) => {
    const { value } = e.target;
    setSelectedMealType(value);
    
  };



  return (
    <div className='w-full md:min-w-[500px] flex flex-col gap-8 p-4 md:p-10 md:shadow-md md:border bg-white '>
     
     <div>
        <Heading heading={"Meal Type"} subHeading={"Do you provide pure veg food or both veg and non-veg?"}></Heading>
        <div className="flex flex-col gap-2 mt-4">
          {Object.keys(mealTypesState).map((type) => (
            <RadioButton 
            key={type}
            label={type}
            name={type}
            checked={selectedMealType === type}
            onChange={handleTypeChange}
            />
          ))}
        </div>
     </div>

     <div>
       <Heading heading={"Meals Pricing"} subHeading={""}></Heading>
       <div className=' mt-2'>
         <div className='flex justify-between'>
          
          {selectedMealType === "Vegetarian" ? 
          <InputBox type={"text"} label={"Vegetarian"} placeholder={"Rs"} /> 
          : 
          <InputBox type={"text"} label={"Both (Veg & Non-Veg)"} placeholder={"Rs"} />}
          
         </div>
       </div>
     </div>
     

     {/***************** add meals image ****************/}
     <div className="max-h-[400px] flex justify-center ">
        <div className="w-full max-w-md mx-auto">
          <div className='mb-auto md:mb-4'>
            <Heading heading={"Upload Images"} subHeading={""}></Heading>
          </div>
            <ImageUploaderComp />
        </div>
      </div>

      <div >
      <Button label={"Save & Continue"} onClick={()=>{setForm('TermsForm')}}></Button>
      </div>
      
    </div>
  );
}


