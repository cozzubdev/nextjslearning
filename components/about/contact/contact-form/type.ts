export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export enum ContactFormFields {
  NAME = 'name',
  EMAIL = 'email',
  SUBJECT = 'subject',
  MESSAGE = 'message',
}
