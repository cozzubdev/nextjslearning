import { NextApiRequest, NextApiResponse } from 'next';

import { compare } from 'bcrypt';
import { serialize } from 'cookie';
import { sign } from 'jsonwebtoken';
import { setCookie } from 'nookies';

import { PrismaClient } from '@prisma/client';

import { User } from 'models/user';

const prisma = new PrismaClient();

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { email, password } = req.body;

  const user: User | null = await prisma.user.findOne({
    where: { email },
  });

  if (req.method === 'POST') {
    if (user && compare(password, user.password)) {
      const jwt = sign(
        { email: user.email, id: user.id, time: new Date() },
        process.env.JWT_SECRET!,
        {
          expiresIn: '6h',
        }
      );

      setCookie({ res }, 'token', jwt, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 3600,
        path: '/',
      });

      res.setHeader(
        'Set-Cookie',
        serialize('loginStatus', '1', {
          httpOnly: false,
          path: '/',
          secure: false,
          maxAge: 3600,
        })
      );

      res.json(user);
    } else {
      res.json({ error: 'Incorrect username or password' });
    }
  } else {
    res.status(405).json({ message: 'We only support POST' });
  }
};
