import { NextApiRequest, NextApiResponse } from 'next';

import { hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { setCookie } from 'nookies';
import { serialize } from 'cookie';

import { PrismaClient } from '@prisma/client';

import { User } from 'models/user';

const prisma = new PrismaClient();

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'POST') {
    const { firstName, lastName, email, password } = req.body;
    hash(password, 10, async (err, encryptedPass) => {
      let user: User | null;
      try {
        user = await prisma.user.create({
          data: {
            firstName,
            lastName,
            email,
            password: encryptedPass,
          },
        });
      } catch (error) {
        console.error(error);
        console.log(error);
        res.json({ error });
        return;
      }

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
    });
  } else {
    res.status(405).json({ message: 'We only support POST' });
  }
};
