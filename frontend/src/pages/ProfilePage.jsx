import React from 'react';
import { useParams } from 'react-router-dom';
import ContactCard from '../components/Cards/ContactCard';

export const ProfilePage = () => {
    const {id} = useParams();
  return (
    <div>
      <ContactCard/>
    </div>
  );
}


