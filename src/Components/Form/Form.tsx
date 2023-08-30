import React, { useState, FormEvent, ChangeEvent } from 'react';
import { nanoid } from 'nanoid';

import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';

import { addContact } from '../../redux/contacts/contactSlise';

import Button from '../Button';

import { getContacts } from '../../redux/contacts/selectors';

import {
  ImputEnter,
  InputType,
  InputText,
  FormStyled,
} from '../FormComponents';

type TContact = {
  name: string;
  number: string;
};

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { contacts } = useSelector(getContacts);

  const dispatch = useDispatch();

  const addContactHandle = ({ name, number }: TContact) => {
    if (contacts.find((contact: TContact) => contact.name === name)) {
      toast.error('Contact is exist!');
      return;
    } else {
      toast.success('Contact added');
      dispatch(addContact({ id: nanoid(), name, number }));
    }
  };

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    addContactHandle({ name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputType>
        {' '}
        <InputText>Name</InputText>
        <ImputEnter
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter your name"
          required
          value={name}
          onChange={handleChange}
        />
      </InputType>
      <InputType>
        {' '}
        <InputText>Name</InputText>
        <ImputEnter
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter your number"
          value={number}
          onChange={handleChange}
        />
      </InputType>
      <Button type="submit">Add contact</Button>
    </FormStyled>
  );
};

export default Form;
