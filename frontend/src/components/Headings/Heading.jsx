import React from 'react';

export const Heading = ({subHeading, heading}) => {
  return (
    <div>
      <h1 className='font-bold text-gray-900 text-xl'>{heading}</h1>
      <p className='text-gray-500 text-sm'>{subHeading}</p>
    </div>
  );
}


