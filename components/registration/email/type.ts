import { FormikErrors, FormikTouched } from 'formik';
import { RegistrationValues } from 'scenes/registration-scene/type';
import { InputHTMLAttributes, DetailedHTMLProps } from 'react';

export interface EmailFieldProps {
  errors: FormikErrors<RegistrationValues>;
  touched: FormikTouched<RegistrationValues>;
  values: RegistrationValues;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export interface EmailInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  errors: FormikErrors<RegistrationValues>;
}

export enum EmailField {
  EMAIL = 'email',
}

export type EmailLabelError = {
  error: string | undefined;
};
