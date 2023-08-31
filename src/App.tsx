import { Toaster } from 'react-hot-toast';

import { Container } from './Components/Container';
import Form from './Components/Form';
import { Section, Title } from './Components/Section';
import ContactList from './Components/ContactList';

import Filter from './Components/Filter';

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
    </Container>
  );
}
