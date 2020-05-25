import { FormikErrors, FormikTouched } from 'formik';
import { RegistrationValues } from 'scenes/registration-scene/type';

export interface PasswordFieldProps {
  errors: FormikErrors<RegistrationValues>;
  touched: FormikTouched<RegistrationValues>;
  values: RegistrationValues;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export enum PasswordField {
  PASSWORD = 'password',
}
