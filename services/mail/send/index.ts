import { ContactFormValues } from 'components/about/contact/contact-form/type';

export const sendMail = async (options: ContactFormValues): Promise<void> => {
  const reqInit: RequestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(options),
  };

  const response = await fetch(`/api/mail/send`, reqInit);

  return response.json();
};
