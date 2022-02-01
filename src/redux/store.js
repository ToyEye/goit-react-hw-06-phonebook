import { configureStore } from '@reduxjs/toolkit';
import contacts from './contacts/contact-reducer';

export const store = configureStore({
  reducer: { contacts },
});
