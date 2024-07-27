import React from 'react';

export const InputBox = ({label, type, placeholder}) => {
  return (
    <div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-500 ">{label}</label>
            <input type={type}  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm  block w-full p-2.5  " placeholder={placeholder} required />
        </div>
    </div>
  );
}


