import React, { ReactElement } from 'react';
import { GridCol } from 'components/layout/grid';
import { InputWrapper, ErrorText } from 'scenes/registration-scene/style';
import { EmailInput, EmailInputLabel } from './style';
import { EmailFieldProps, EmailField } from './type';

export const Email = ({
  errors,
  values,
  touched,
  handleChange,
  handleBlur,
}: EmailFieldProps): ReactElement => {
  return (
    <GridCol colNum={2}>
      <InputWrapper>
        <EmailInputLabel
          htmlFor={EmailField.EMAIL}
          error={errors[EmailField.EMAIL]}>
          Email *
        </EmailInputLabel>
        <EmailInput
          name={EmailField.EMAIL}
          id={EmailField.EMAIL}
          type='text'
          onChange={handleChange}
          onBlur={handleBlur}
          required
          value={values[EmailField.EMAIL]}
          errors={errors}
        />
        {errors[EmailField.EMAIL] && touched[EmailField.EMAIL] && (
          <ErrorText>This field is required!</ErrorText>
        )}
      </InputWrapper>
    </GridCol>
  );
};
