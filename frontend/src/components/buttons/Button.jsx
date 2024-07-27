import React from 'react';

export const Button = ({label}) => {
  return (
    <div >
      <button className="focus:outline-none text-white bg-green-600 hover:bg-green-800  font-medium rounded-md text-md px-5 py-2.5 me-2 mb-2 ">{label}</button>
    </div>
  );
}


