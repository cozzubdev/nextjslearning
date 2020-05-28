import React, { ReactElement } from 'react';
import { GridCol } from 'components/layout/grid';
import { InputWrapper, ErrorText } from 'scenes/registration-scene/style';
import { PasswordInput, PasswordInputLabel } from './style';
import { PasswordFieldProps, PasswordField } from './type';

export const Password = ({
  errors,
  values,
  touched,
  handleChange,
  handleBlur,
}: PasswordFieldProps): ReactElement => {
  return (
    <GridCol colNum={2}>
      <InputWrapper>
        <PasswordInputLabel
          htmlFor={PasswordField.PASSWORD}
          error={errors[PasswordField.PASSWORD]}>
          Password *
        </PasswordInputLabel>
        <PasswordInput
          name={PasswordField.PASSWORD}
          id={PasswordField.PASSWORD}
          type='text'
          onChange={handleChange}
          onBlur={handleBlur}
          required
          value={values[PasswordField.PASSWORD]}
          errors={errors}
        />
        {errors[PasswordField.PASSWORD] && touched[PasswordField.PASSWORD] && (
          <ErrorText>This field is required!</ErrorText>
        )}
      </InputWrapper>
    </GridCol>
  );
};
