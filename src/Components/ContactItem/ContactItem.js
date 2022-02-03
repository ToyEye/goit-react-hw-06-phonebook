import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import actions from '../../redux/contacts/contact-action';
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

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ContactItemStyled key={id} id={id}>
      <ContactName>
        {name} : {number}
      </ContactName>
      <Button onClick={() => dispatch(actions.deleteContact(id))} type="button">
        Delete
      </Button>
    </ContactItemStyled>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
