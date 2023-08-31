import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactSlice from './contacts/contactSlise';
import filterSlice from './contacts/filterSlise';

const persistConfigContacts = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(
  persistConfigContacts,
  contactSlice.reducer
);

export const store = configureStore({
  reducer: { contacts: persistedReducer, filter: filterSlice },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
