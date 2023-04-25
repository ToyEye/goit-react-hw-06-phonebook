import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { deleteContact, addContact } from './contactSlise';

axios.defaults.baseURL = 'https://6447f57c50c2533744347a1c.mockapi.io';

const fetchApi = createAsyncThunk(
  'contacts/fetchApi',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');

      if (response.status !== 200) {
        throw new Error('Server Error');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const addContactThunk = createAsyncThunk(
  'contacts/addContactThunk',
  async (contact, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post('/contacts', { ...contact });

      if (response.status !== 200) {
        throw new Error('Server Error');
      }

      dispatch(addContact(response.data));

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContactThunk',
  async ({ id }, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      if (response.status !== 200) {
        throw new Error('Server Error');
      }
      dispatch(deleteContact({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export { fetchApi, addContactThunk, deleteContactThunk };
