import React, { useState } from 'react';
import { OwnersDetailsForm } from '../components/Forms/OwnersDetails';
import { ServiceInfoForms } from '../components/Forms/ServiceInfoForms';
import { useRecoilValue } from 'recoil';
import { currentFormState} from '../store/atoms/currentFormState';
import { MealForm } from '../components/Forms/MealForm';
import { NavigationMenu } from '../components/NavigationMenu';
import { TermsForm } from '../components/Forms/TermsForm';
import { NavBar } from '../components/NavBarComponent';

const FormDisplay = () => {
  const currentForm = useRecoilValue(currentFormState);

  switch(currentForm){
    case 'OwnerForm':
      return <OwnersDetailsForm />
    case 'ServiceForm':
      return <ServiceInfoForms></ServiceInfoForms>
    case 'MealForm':
      return <MealForm></MealForm>
    case 'TermsForm':
      return <TermsForm />
    default:
      return <OwnersDetailsForm />
  }
}

export const Local = () => {
  const [showForm, setShowForm] = useState(false);
  const handleNavigationClick = () => {
    setShowForm(false); //show navigation menu
  }
  const handleFormClick = () => {
    setShowForm(true); //show form
  }
  return (
    <div className='overflow-x-clip'>
      <div className='w-screen  bg-white sticky top-0 z-50'>
          <NavBar></NavBar>
        </div>
     <div className='w-screen flex justify-center mt-10 bitems-center md:p-10 px-4 py-10'>
      <div className='flex  gap-6'>
        
          <div className={`px-4 mt-5 ${showForm === false ? 'block' : 'hidden'} md:block flex flex-col justify-start w-screen md:w-auto`}>
            <NavigationMenu onClick={handleFormClick}/>
          </div>
        
          
            <div className={`${showForm === true ? 'block' : 'hidden'} md:block flex flex-col md:flex-row  w-screen md:w-auto`}>
              <button
                onClick={handleNavigationClick}
                className='md:hidden ml-1 w-16 mb-4 p-2 bg-white text-gray-900 flex justify-start '
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                <path fill-rule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clip-rule="evenodd" />
              </svg>
              </button>
            <div className='flex-1'>
              <FormDisplay />
            </div>
          </div>
          
          
        </div> 
     </div>
    </div>
  );
}


