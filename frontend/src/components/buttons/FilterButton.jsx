import React from 'react';

export const FilterButton = ({label}) => {
  return (
    <div>
      <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">{label}</button>
    </div>
  );
}

