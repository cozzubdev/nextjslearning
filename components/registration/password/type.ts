import { FormikErrors, FormikTouched } from 'formik';
import { RegistrationValues } from 'scenes/registration-scene/type';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface PasswordFieldProps {
  errors: FormikErrors<RegistrationValues>;
  touched: FormikTouched<RegistrationValues>;
  values: RegistrationValues;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export interface PasswordInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  errors: FormikErrors<RegistrationValues>;
}
export enum PasswordField {
  PASSWORD = 'password',
}

export type PasswordLabelError = {
  error: string | undefined;
};
