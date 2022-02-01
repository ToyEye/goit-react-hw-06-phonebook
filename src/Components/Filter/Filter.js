import React from 'react';
import { ImputEnter, InputType, InputText } from '../FormComponents';
import actions from '../../redux/contacts/contact-action';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contact-selector';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handler = evt => {
    dispatch(actions.filterChange(evt.target.value));
  };

  return (
    <InputType>
      <InputText>Find contact by name</InputText>
      <ImputEnter type="text" value={filter} onChange={handler} />
    </InputType>
  );
};

export default Filter;
