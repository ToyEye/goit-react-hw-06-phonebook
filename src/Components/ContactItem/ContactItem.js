import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { deleteContactThunk } from '../../redux/contacts/operations';

// import { deleteContact } from '../../redux/contacts/contactSlise';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const ContactItemStyled = styled.li`
  color: black;
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

const ContactName = styled.p`
  color: black;
  margin-bottom: 15px;
`;

export const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  return (
    <ContactItemStyled key={id} id={id}>
      <ContactName>
        {name} : {phone}
      </ContactName>
      <Button
        onClick={() => dispatch(deleteContactThunk({ id }))}
        type="button"
      >
        Delete
      </Button>
    </ContactItemStyled>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
