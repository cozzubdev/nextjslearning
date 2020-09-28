// eslint-disable-next-line @typescript-eslint/no-var-requires
const sqlite = require('sqlite');

async function setup() {
  const db = await sqlite.open('./mydb.sqlite');
  await db.migrate({ force: 'last' });

  const people = await db.all('SELECT * FROM person');
  console.log('ALL PEOPLE', JSON.stringify(people, undefined, 2));
}

setup();
