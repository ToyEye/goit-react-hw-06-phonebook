import React from 'react';

import { useSelector } from 'react-redux';
import filterSelector from '../../redux/contacts/selectors';
import { ContactItem } from '../ContactItem';

import { ContactStyledList } from './ContactList.styled';

type Props = {
  id: string;
  name: string;
  phone: string;
};

const ContactList = () => {
  const contacts = useSelector(filterSelector);

  return (
    <ContactStyledList>
      {contacts &&
        contacts.map(({ name, id, phone }: Props) => (
          <ContactItem key={id} name={name} id={id} phone={phone} />
        ))}
    </ContactStyledList>
  );
};

export default ContactList;
