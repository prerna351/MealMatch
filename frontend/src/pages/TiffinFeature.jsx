import React, { useEffect, useState } from 'react';
import { NavBar } from '../components/NavBarComponent';
import { ProfileCard } from '../components/Cards/ProfileCard';
import { Rooms } from '../components/featureMenuIcons/Rooms';
import { Roommates } from '../components/featureMenuIcons/Roommates';
import { Pgs } from '../components/featureMenuIcons/Pgs';
import { Tiffin } from '../components/featureMenuIcons/Tiffin';
import axios from 'axios';
import { FilterMenuButton } from '../components/buttons/FilterMenuButton';
import { Search_basic } from '../components/SearchBar/Search_basic';
import { useParams } from 'react-router-dom';
import { API_URL } from '../config';

export const TiffinFeature = () => {
  const {city_name} = useParams();
  console.log(city_name)
  // console.log(city_name)
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    //fetch details for profile card
    const fetchDetails = async () => {
      try {
        console.log("Fetching details...");
        const response = await axios.get(`${API_URL}/api/providers/${city_name}`);
        setProviders(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDetails();
  },[city_name])

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
                          <FilterMenuButton/>
                      </div>
                    </div>
                  </div>
                </div>

                
                <div className='profileCard mt-8  grid grid-cols-1 md:grid-cols-2 space-y-0 gap-6'>
                  {providers.map(provider => (
                    <ProfileCard 
                      key={provider.id}
                      id={provider.id}
                      ownername = {provider.name}
                      contact = {provider.contact}
                      streetAddress = {provider.streetAddress}
                      city = {provider.city}
                      state = {provider.state}
                      mealType = {provider.mealType}
                      charges = {provider.charges}
                    ></ProfileCard>
                  ))}
                </div>
            </div>
        </div>
    </div>
  );
}


