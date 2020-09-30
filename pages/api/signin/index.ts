import { NextApiRequest, NextApiResponse } from 'next';

import { compare } from 'bcrypt';
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

  if (user && compare(password, user.password)) {
    const jwt = sign(
      { email: user.email, id: user.id, time: new Date() },
      process.env.JWT_SECRET!,
      {
        expiresIn: '6h',
      }
    );

    setCookie({ res }, 'token', jwt, {
      httpOnly: false,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 3600,
      path: '/',
    });
    res.status(200);
    res.json(user);
  } else {
    res.json({ error: 'Incorrect username or password' });
  }
};
