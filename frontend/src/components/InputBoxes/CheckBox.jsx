import React from 'react';

export const CheckBox = ({ label, name, checked, onChange }) => {
  return (
    <div>
      <div className="flex items-center me-4">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300"
        />
        <label
          htmlFor={name}
          className="ms-2 text-sm  text-gray-700"
        >
          {label}
        </label>
      </div>
    </div>
  );
};
