import { createSlice, nanoid } from '@reduxjs/toolkit';

import { fetchApi, addContactThunk, deleteContactThunk } from './operations';

export const initialState = {
  contacts: [],
  loading: null,
  error: null,
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
