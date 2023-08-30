import { ChangeEvent } from 'react';
import { ImputEnter, InputType, InputText } from '../FormComponents';
import { filterContact } from '../../redux/contacts/filterSlise';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();

  const handler = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch(filterContact(evt.target.value));
  };

  return (
    <InputType>
      <InputText>Find contact by name</InputText>
      <ImputEnter type="text" onChange={handler} />
    </InputType>
  );
};

export default Filter;
