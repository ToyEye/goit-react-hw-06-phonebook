import { createSlice, nanoid } from '@reduxjs/toolkit';

import { fetchApi, addContactThunk, deleteContactThunk } from './operations';

export const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
  },
  extraReducers: {
    [fetchApi.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [fetchApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.contacts = action.payload;
    },
    [fetchApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteContactThunk.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [deleteContactThunk.fulfilled]: state => {
      state.loading = false;
    },
    [deleteContactThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [addContactThunk.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [addContactThunk.fulfilled]: state => {
      state.loading = false;
    },
    [addContactThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;

export default contactSlice;
