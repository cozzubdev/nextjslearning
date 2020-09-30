export const getInfo = async (): Promise<unknown> => {
  const reqInit: RequestInit = {
    method: 'GET',
  };

  const response = await fetch(`/api/profile`, reqInit);

  return response.json();
};
