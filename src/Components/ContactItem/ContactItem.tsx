import React from 'react';
import { useDispatch } from 'react-redux';

import { ContactItemStyled, ContactName } from './ContactItem.styled';
import Button from '../Button';
import { deleteContact } from '../../redux/contacts/contactSlise';

type Props = {
  id: string;
  name: string;
  phone: string;
};

export const ContactItem = ({ id, name, phone }: Props) => {
  const dispatch = useDispatch();
  return (
    <ContactItemStyled key={id} id={id}>
      <ContactName>
        {name} : {phone}
      </ContactName>
      <Button onClick={() => dispatch(deleteContact({ id }))} type="button">
        Delete
      </Button>
    </ContactItemStyled>
  );
};
