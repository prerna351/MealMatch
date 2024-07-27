import React from 'react';
import { DetailsButtons } from './buttons/DetailsButtons';
import { useSetRecoilState } from 'recoil';
import { currentFormState } from '../store/atoms/currentFormState';

export const NavigationMenu = ({onClick}) => {
    const  setCurrentForm = useSetRecoilState(currentFormState)
  return (
    <div className='w-full'>

      <DetailsButtons 
      label={"Owner's Information"} 
      onClick={() => {
        setCurrentForm('OwnerForm'); 
        onClick();
        }} />

      <DetailsButtons 
      label={"Service Details"} 
      onClick={() => {
        setCurrentForm('ServiceForm');
        onClick();
        }}/>

      <DetailsButtons 
      label={"Meal & Pricing Details"} 
      onClick={() => {setCurrentForm('MealForm')
        onClick();
      }}/>

      <DetailsButtons 
      label={"Terms & Conditions"} 
      onClick={() => {setCurrentForm('TermsForm')
        onClick();
      }}/>

    </div>
  );
}

