const filterSelector = state => {
  const { contacts } = state.contacts;
  const { filter } = state.filter;

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export default filterSelector;

export const getContacts = state => state.contacts;
