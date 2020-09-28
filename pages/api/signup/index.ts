import { hash } from 'bcrypt';
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
    hash(req.body.password, 10, async (err, encryptedPass) => {
      const statement = await db.prepare(
        'INSERT INTO person (firstName, lastName, email, password) values (?, ?, ?, ?)'
      );
      const result = await statement.run(
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        encryptedPass
      );

      result.stmt.finalize();

      const person = await db.get('select * from person where email = ?', [
        req.body.email,
      ]);
      res.json(person);
    });
  } else {
    res.status(405).json({ message: 'We only support POST' });
  }
};
