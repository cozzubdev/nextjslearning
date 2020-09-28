export const getInfo = async (): Promise<unknown> => {
  const reqInit: RequestInit = {
    method: 'GET',
  };

  const response = await fetch(
    `${process.env.CURRENT_HOST}/api/profile`,
    reqInit
  );

  return response.json();
};
