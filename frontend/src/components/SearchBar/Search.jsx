import React, { useState } from 'react';

export const Search = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <form className="max-w-lg mx-auto">
        <div className="flex">
          <div className="relative w-full">
            <div className={`flex rounded-full items-center transform transition-transform duration-200 ${isFocused ? 'scale-105 shadow-lg' : 'scale-100'}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-gray-400 w-6 h-6 absolute left-3"
              >
                <path
                  fillRule="evenodd"
                  d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="search"
                className={`py-4 pl-10 pr-4 w-full text-sm text-gray-900 rounded-full focus:outline-none placeholder:text-center ${isFocused ? 'border border-green-500 bg-white' : 'border border-spacing-2 bg-gray-100 shadow-md'}`}
                placeholder="Search places"
                required
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
