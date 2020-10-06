export const getInfo = async (): Promise<unknown> => {
  const reqInit: RequestInit = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CURRENT_HOST}/api/profile`,
    reqInit
  );

  return response.json();
};
