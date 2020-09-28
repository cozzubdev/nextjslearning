import { hash } from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const db = await open('./mydb.sqlite');

  if (req.method === 'POST') {
    hash(req.body.password, 10, async (err, encryptedPass) => {
      const statement = await db.prepare(
        'INSERT INTO person (email, password) values (?, ?)'
      );
      const result = await statement.run(req.body.email, encryptedPass);
      result.finalize();

      const person = await db.get('select * from person where email = ?', [
        req.body.email,
      ]);
      res.json(person);
    });
  } else {
    res.status(405).json({ message: 'We only support POST' });
  }
};
