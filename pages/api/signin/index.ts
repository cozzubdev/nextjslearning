import { compare } from 'bcrypt';
import cookie from 'cookie';
import { sign } from 'jsonwebtoken';
import { setCookie } from 'nookies';
import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

const driver = sqlite3.Database;

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const db = await open({ filename: './mydb.sqlite', driver });

  if (req.method === 'POST') {
    const person = await db.get('select * from person where email = ?', [
      req.body.email,
    ]);

    compare(req.body.password, person.password, (err, result) => {
      if (!err && result) {
        const claims = { sub: person.id, myPersonEmail: person.email };
        const jwt = sign(claims, process.env.SECRET!, { expiresIn: '1h' });

        setCookie({ res }, 'authStatus', jwt, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          sameSite: 'strict',
          maxAge: 3600,
          path: '/',
        });

        res.setHeader(
          'Set-Cookie',
          cookie.serialize('loginStatus', '1', {
            httpOnly: false,
            path: '/',
            secure: false,
            maxAge: 30 * 24 * 60 * 60,
          })
        );

        res.json({ message: `Welcome back !` });
      } else {
        res.json({ message: 'Ups, something went wrong!' });
      }
    });
  } else {
    res.status(405).json({ message: 'We only support POST' });
  }
};
