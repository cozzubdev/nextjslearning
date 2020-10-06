export const getInfo = async (host: string | undefined): Promise<unknown> => {
  const reqInit: RequestInit = {
    method: 'GET',
  };

  const response = await fetch(`http://${host}/api/profile`, reqInit);

  return response.json();
};
