import { atom } from 'recoil';

export const currentFormState = atom({
  key: 'currentFormState',
  default: 'OwnerForm', // Default form
});