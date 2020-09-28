export interface RegistrationValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export enum RegistrationFields {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  EMAIL = 'email',
  PASSWORD = 'password',
}
