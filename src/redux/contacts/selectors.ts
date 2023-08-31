import { RootState, Contact } from '../../types.js';

const filterSelector = (state: RootState) => {
  const { contacts } = state.contacts;
  const { filter } = state.filter;

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export default filterSelector;

export const getContacts = (state: RootState): Contact[] =>
  state.contacts.contacts;
