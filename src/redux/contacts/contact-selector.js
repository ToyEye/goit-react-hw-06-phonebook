export const getContact = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;

export const getAllContacts = state => {
  const contacts = getContact(state);
  const filter = getFilter(state);

  const normalizeFilter = filter.toLocaleLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );
};
