import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import actions from '../../redux/contacts/contact-action';
import { useSelector, useDispatch } from 'react-redux';
import { getAllContacts } from '../../redux/contacts/contact-selector';

const ContactStyledList = styled.ul`
  width: 450px;
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 5px;
`;
const ContactItem = styled.li`
  color: black;
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

const ContactName = styled.p`
  color: black;
  margin-bottom: 15px;
`;

const ContactList = () => {
  const contacts = useSelector(getAllContacts);
  const dispatch = useDispatch();

  return (
    <ContactStyledList>
      {contacts.map(({ name, id, number }) => (
        <ContactItem key={id} id={id}>
          <ContactName>
            {name} : {number}
          </ContactName>
          <Button
            onClick={() => dispatch(actions.deleteContact(id))}
            type="button"
          >
            Delete
          </Button>
        </ContactItem>
      ))}
    </ContactStyledList>
  );
};

export default ContactList;
