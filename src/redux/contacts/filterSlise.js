import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './contactSlise';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterContact } = filterSlice.actions;

export default filterSlice.reducer;
