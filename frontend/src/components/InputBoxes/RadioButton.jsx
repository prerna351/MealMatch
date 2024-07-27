// RadioButton.js
import React from 'react';

export const RadioButton = ({ label, name, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input 
        type="radio" 
        name="mealType" 
        value={name} 
        checked={checked} 
        onChange={onChange} 
        className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300" 
      />
      <label className="ml-2 text-sm font-medium text-gray-700">{label}</label>
    </div>
  );
};
