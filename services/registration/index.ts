import { User } from 'models/user';
import { LoginValues } from 'scenes/login-scene/type';
import { RegistrationValues } from 'scenes/registration-scene/type';

export const signUp = async (
  registrationFields: RegistrationValues
): Promise<User> => {
  const reqInit: RequestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(registrationFields),
  };

  const response = await fetch(`/api/signup`, reqInit);

  return response.json();
};

export const signIn = async (loginFields: LoginValues): Promise<void> => {
  const reqInit: RequestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginFields),
  };

  const response = await fetch(`/api/signin`, reqInit);

  return response.json();
};

export const logOut = async (): Promise<void> => {
  const reqInit: RequestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  };

  const response = await fetch(`/api/logout`, reqInit);

  return response.json();
};
