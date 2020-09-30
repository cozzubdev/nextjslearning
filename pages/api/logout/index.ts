import { NextApiRequest, NextApiResponse } from 'next';

import { serialize } from 'cookie';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const cookie = serialize('token', '', {
    maxAge: -1,
    path: '/',
  });
  const loginStatus = serialize('loginStatus', '0', {
    maxAge: -1,
    path: '/',
  });

  res.setHeader('Set-Cookie', cookie);
  res.setHeader('Set-Cookie', loginStatus);
  res.json({ loggedOut: true });
};
