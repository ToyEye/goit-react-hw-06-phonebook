export interface Contact {
  id?: string;
  name: string;
  number: string;
}
export interface ContactsState {
  contacts: Contact[];
}

export interface FilterState {
  filter: string;
}

export interface RootState {
  contacts: ContactsState;
  filter: FilterState;
}
