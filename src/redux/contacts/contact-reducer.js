import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './contact-action';
const inicial = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contacts = createReducer(inicial, {
  [actions.addContact]: (state, { payload }) => [payload, ...state],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});

const filter = createReducer('', {
  [actions.filterChange]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
