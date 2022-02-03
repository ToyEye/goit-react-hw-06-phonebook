import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getAllContacts } from '../../redux/contacts/contact-selector';
import { ContactItem } from '../ContactItem';

const ContactStyledList = styled.ul`
  width: 450px;
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 5px;
`;

const ContactList = () => {
  const contacts = useSelector(getAllContacts);

  return (
    <ContactStyledList>
      {contacts.map(({ name, id, number }) => (
        <ContactItem key={id} name={name} id={id} number={number} />
      ))}
    </ContactStyledList>
  );
};

export default ContactList;
