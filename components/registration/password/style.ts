import styled from 'styled-components';
import { PasswordInputProps, PasswordField, PasswordLabelError } from './type';

export const PasswordInput = styled.input<PasswordInputProps>`
  outline: ${({ errors }): string =>
    errors[PasswordField.PASSWORD] ? 'red' : 'none'};
  padding: 10px;
  margin: 10px;
  background: blueviolet;
  background: #b8b5f5;
  border: none;
  border-radius: 3px;
`;

export const PasswordInputLabel = styled.label<PasswordLabelError>`
  color: ${({ error }): string | undefined => (error ? 'red' : '#5735f0')};

  margin-left: 10px;
`;
