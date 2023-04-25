import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import filterSelector from '../../redux/contacts/selectors';
import { ContactItem } from '../ContactItem';

import { fetchApi } from '../../redux/contacts/operations';

import { LoaderSimbol } from '../Loader/Loader';

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
  const { loading } = useSelector(state => state.contacts);

  const contacts = useSelector(filterSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  return (
    <ContactStyledList>
      {loading && <LoaderSimbol />}
      {contacts &&
        contacts.map(({ name, id, phone }) => (
          <ContactItem key={id} name={name} id={id} phone={phone} />
        ))}
    </ContactStyledList>
  );
};

export default ContactList;
