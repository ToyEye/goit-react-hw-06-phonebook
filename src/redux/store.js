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
import contacts from './contacts/contact-reducer';

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
const persistedReducer = persistReducer(persistConfigContacts, contacts);

export const store = configureStore({
  reducer: { contacts: persistedReducer },
  middleware,
});

export const persistor = persistStore(store);
