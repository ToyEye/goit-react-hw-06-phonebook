import styled from 'styled-components';

const ImputEnter = styled.input`
  width: 220px;
  padding: 5px 15px;
  border-radius: 5px;
  border-color: #d4d4d4;

  &:hover,
  &:active {
    border-color: #7cb1ec;
  }
`;
const InputType = styled.label`
  margin-bottom: 10px;
  &:hover,
  &:active {
    border-color: #7cb1ec;
  }
`;

const InputText = styled.p`
  margin-bottom: 5px;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 450px;
  padding: 10px 15px;
  border: 1px solid black;
  border-radius: 5px;
`;

export { ImputEnter, InputType, InputText, FormStyled };
