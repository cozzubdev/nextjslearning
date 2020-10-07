import { Profile } from 'models/profile';

export const getInfo = async (): Promise<Profile> => {
  const reqInit: RequestInit = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  const basicPath =
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_CURRENT_HOST
      : '';

  const response = await fetch(`${basicPath}/api/profile`, reqInit);

  return response.json();
};
