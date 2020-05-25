import styled from 'styled-components';
import { EmailLabelError, EmailField, EmailInputProps } from './type';

export const EmailInput = styled.input<EmailInputProps>`
  outline: ${({ errors }): string =>
    errors[EmailField.EMAIL] ? 'red' : 'none'};

  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
export const EmailInputLabel = styled.label<EmailLabelError>`
  color: ${({ error }): string | undefined => error && 'red'};

  margin-left: 10px;
`;
