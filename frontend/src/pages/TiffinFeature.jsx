import React, { useEffect, useState } from 'react';
import { NavBar } from '../components/NavBarComponent';
import { ProfileCard } from '../components/Cards/ProfileCard';
import { Rooms } from '../components/featureMenuIcons/Rooms';
import { Roommates } from '../components/featureMenuIcons/Roommates';
import { Pgs } from '../components/featureMenuIcons/Pgs';
import { Tiffin } from '../components/featureMenuIcons/Tiffin';
import { FilterMenuButton } from '../components/buttons/FilterMenuButton';
import { Search_basic } from '../components/SearchBar/Search_basic';
import { cityData } from '../data';
import { Link, useParams } from 'react-router-dom';
import { SortButton } from '../components/buttons/SortButton';

export const TiffinFeature = () => {
  const { city_name } = useParams();
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    if (city_name) {
      const cityProviders = cityData[city_name.toLowerCase()] || [];
      setProviders(cityProviders);
    }
  }, [city_name]);

  return (
    <div className='overflow-x-clip'>
      <div className='w-screen bg-white sticky top-0 z-50'>
        <NavBar />
      </div>
      
      <div className='w-full h-screen px-6 md:px-10 flex justify-center'>
        <div className='mt-5 w-full max-w-[1100px] h-screen '>
          <div className='navMenu'>
            <div className="page hidden md:block text-gray-400 text-sm">Home / Tiffin / {city_name}</div>
            <div className="panel grid grid-cols-1 lg:grid-cols-2">
              <div className="featureMenu col-span-1">
                <div className='flex justify-between md:justify-start gap-5 py-2'>
                  <Rooms />
                  <Roommates />
                  <Pgs />
                  <Tiffin />
                </div>
              </div>
              <div className="search col-span-1 mt-4  mr-6">
                <div className='flex h-full items-center justify-end gap-3'>
                  <Search_basic />
                  <FilterMenuButton />
                  <SortButton></SortButton>
                </div>
              </div>
            </div>
          </div>
          
          <div className='profileCard mt-8 grid grid-cols-1 md:grid-cols-2 space-y-0 gap-6'>
            {providers.length > 0 ? (
              providers.map(provider => (
                <Link to={`/city/${city_name}/${provider.id}`}>
                  <ProfileCard 
                  key={provider.id}
                  id={provider.id}
                  ownername={provider.name}
                  contact={provider.contact}
                  streetAddress={provider.streetAddress}
                  city={provider.city}
                  state={provider.state}
                  mealType={provider.mealType}
                  charges={provider.charges}
                  ratings={provider.ratings}
                /></Link>
              ))
            ) : (
              <div>No providers found for {city_name}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
