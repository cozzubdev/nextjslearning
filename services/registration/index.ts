import { RegistrationValues } from 'scenes/registration-scene/type';

export const signUp = async (
  registrationFields: RegistrationValues
): Promise<void> => {
  const reqInit: RequestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(registrationFields),
  };

  const response = await fetch(
    `${process.env.CURRENT_HOST}/api/signup`,
    reqInit
  );

  return response.json();
};

export const signIn = async (
  registrationFields: RegistrationValues
): Promise<void> => {
  const reqInit: RequestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(registrationFields),
  };

  const response = await fetch(
    `${process.env.CURRENT_HOST}/api/signin`,
    reqInit
  );

  return response.json();
};
