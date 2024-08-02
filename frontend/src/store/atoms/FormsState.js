import { atom } from 'recoil';

export const ownerDetailsAtom = atom({
  key: 'ownerDetailsAtom', // unique ID for this atom
  default: {
    ownerName: '',
    contactNumber: '',
    streetAddress: '',
    pincode: '',
    city: '',
    state: '',
    country: "India"
    
  },
});



export const mealDetailsAtom = atom({
  key: 'mealDetailsAtom', // unique ID for this atom
  default: {
    mealTypes: [], // e.g., ['Breakfast', 'Lunch', 'Dinner']
    pricing: {
      breakfast: '',
      lunch: '',
      dinner: '',
    },
    // Add other fields as necessary
  },
});