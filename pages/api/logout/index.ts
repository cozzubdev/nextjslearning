import { NextApiRequest, NextApiResponse } from 'next';

import { destroyCookie } from 'nookies';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  destroyCookie({ res }, 'token', {
    maxAge: -1,
    path: '/',
  });

  res.status(200);
  res.json({ loggedOut: true });
};
