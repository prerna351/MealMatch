import React from 'react';
import { NavBar } from '../components/NavBarComponent';
import { ProfileCard } from '../components/Profile/ProfileCard';
import { Rooms } from '../components/featureMenuIcons/Rooms';
import { Roommates } from '../components/featureMenuIcons/Roommates';
import { Pgs } from '../components/featureMenuIcons/Pgs';
import { Tiffin } from '../components/featureMenuIcons/Tiffin';

import { FilterButton } from '../components/buttons/FilterButton';
import { Search_basic } from '../components/SearchBar/Search_basic';

export const TiffinFeature = () => {
  return (
    <div className='overflow-x-clip'>
        <div className='w-screen bg-white sticky top-0 z-50'>
          <NavBar></NavBar>
        </div>
        
        <div className='w-full h-screen px-6 md:px-10 flex justify-center'>
            <div className='mt-5 w-full max-w-[1100px] h-screen'>

                <div className='navMenu '>
                  <div className="page hidden md:block text-gray-400 text-sm">Home / Tiffin / Banglore</div>
                  <div className="panel grid grid-cols-1 lg:grid-cols-2">
                    <div className="featureMenu col-span-1">
                      
                      <div className='flex justify-between md:justify-start gap-5 py-2'>
                          <Rooms />
                          <Roommates />
                          <Pgs />
                          <Tiffin />
                      </div>

                    </div>
                    <div className="search col-span-1  mt-4">
                      <div className='flex  h-full items-center justify-end gap-5'>
                          <Search_basic></Search_basic>
                          <FilterButton/>
                      </div>
                    </div>
                  </div>
                </div>

                
                <div className='profileCard mt-8  grid grid-cols-1 md:grid-cols-2 space-y-0 gap-6'>
                  <ProfileCard></ProfileCard>
                  <ProfileCard></ProfileCard>
                  <ProfileCard></ProfileCard>
                  <ProfileCard></ProfileCard>
                  <ProfileCard></ProfileCard>
                </div>
            </div>
        </div>
    </div>
  );
}


/* <div className='flex flex-col  gap-4'>
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div> */