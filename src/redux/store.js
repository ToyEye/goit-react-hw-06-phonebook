import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
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

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

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
  middleware,
});

export const persistor = persistStore(store);
