import './App.css';
import React from 'react';
import { Container } from './Components/Container';
import Form from './Components/Form';
import { Section, Title } from './Components/Section';
import ContactList from './Components/ContactList';
import { Footer } from './Components/Footer';
import Filter from './Components/Filter';
import { Toaster } from 'react-hot-toast';

export default function App() {
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
        <Form />
      </Section>
      <Section>
        <Title>Contacts</Title>
        <Filter />
        <ContactList />
      </Section>

      <Footer />
    </Container>
  );
}
