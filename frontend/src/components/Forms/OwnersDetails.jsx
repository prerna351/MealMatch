import React from 'react';
import { InputBox } from '../InputBoxes/InputBoxComponent';
import { Button } from '../buttons/Button';
import { Heading } from '../Headings/Heading';

export const OwnersDetailsForm = () => {
  return (
    <div className='w-full  md:min-w-[500px]  flex flex-col gap-5 p-4 md:p-10 md:shadow-md md:border bg-white'>
      <div className='mb-5'>
      <Heading heading={"Who own's the service?"} subHeading={"Fill in the details of the owner"}></Heading>  
      </div>
      <InputBox label={"Full Name*"} type={"text"} placeholder={""}></InputBox>
      <InputBox label={"Mobile Number*"} type={"text"} placeholder={""}></InputBox>
      <InputBox label={"Street Address*"} type={"text"} placeholder={"Enter Owner's address with pincode"}></InputBox>
        <div className='w-full flex gap-4'>
          <InputBox label={"City*"} type={"text"} placeholder={""}></InputBox>
          <InputBox label={"State*"} type={"text"} placeholder={""}></InputBox>
        </div>
      <div className='mt-6'>
      <Button label={"Save & Continue"} onClick={()=>{}}></Button>
      </div>
    </div>
  );
}
