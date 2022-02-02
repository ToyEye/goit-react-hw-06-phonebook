import './App.css';
import React from 'react';
import { Container } from './Components/Container';
import Form from './Components/Form';
import { Section, Title } from './Components/Section';
import ContactList from './Components/ContactList';
import { Footer } from './Components/Footer';
import Filter from './Components/Filter';
import toast, { Toaster } from 'react-hot-toast';
import NotificationMessage from './Components/NotificationMessage';
import { useSelector, useDispatch } from 'react-redux';
import actions from './redux/contacts/contact-action';
import { getContact } from './redux/contacts/contact-selector';

export default function App() {
  const contacts = useSelector(getContact);
  const dispatch = useDispatch();

  const addContact = ({ name, number }) => {
    if (contacts.find(contact => contact.name === name)) {
      toast.error('Контакт существует!');
      return;
    } else {
      toast.success('Контакт добавлен');
      dispatch(actions.addContact(name, number));
    }
  };

  return (
    <Container>
      <Toaster
        toastOptions={{
          error: {
            duration: 2000,
          },
        }}
      />
      <Section>
        <Title>Phonebook</Title>
        <Form onSubmit={addContact} />
      </Section>
      <Section>
        <Title>Contacts</Title>
        <Filter />
        {contacts.length < 1 ? (
          <NotificationMessage>No Contacts</NotificationMessage>
        ) : (
          <ContactList />
        )}
      </Section>

      <Footer />
    </Container>
  );
}
