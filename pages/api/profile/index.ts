import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200);
  res.json({
    basics: {
      name: 'Mykola Kozubov',
      birthdate: '18.12.1996',
      label: 'Front-End developer at NearShorePartner.ch',
      image: 'assets/avatar.jpg',
      email: 'cozzub@gmail.com',
      phone: 380996672171,
      url: 'www.linkedin.com/in/mykola-kozubov',
      location: {
        address: 'Ukraine',
        postalCode: 62441,
        city: 'Tsyrkuny',
        countryCode: 'UA',
        region: 'Kharkiv',
      },
    },
    work: [
      {
        name: 'NearShorePartner.ch',
        endDate: '',
        highlights: [],
        position: 'Junior Software Engineer',
        startDate: '2020-01-31',
        summary: '',
        url: 'https://www.linkedin.com/company/18623506',
      },
    ],
    volunteer: [],
    education: [],
    awards: [],
    publications: [],
    skills: [
      {
        name: 'JavaScript',
        level: '',
        keywords: [],
      },
      {
        name: 'React.js',
        level: '',
        keywords: [],
      },
      {
        name: 'Next.js',
        level: '',
        keywords: [],
      },
      {
        name: 'TypeScript',
        level: '',
        keywords: [],
      },
      {
        name: 'HTML',
        level: '',
        keywords: [],
      },
      {
        name: 'Cascading Style Sheets (CSS)',
        level: '',
        keywords: [],
      },
    ],
    languages: [
      {
        language: 'en',
        fluency: 'Intermediate',
      },
      {
        language: 'ua',
        fluency: 'Native Speaker',
      },
      {
        language: 'ru',
        fluency: 'Native Speaker',
      },
    ],
    interests: [],
    references: [],
    projects: [
      {
        name: 'Pfister E-com',
        url: 'https://www.pfister.ch',
      },
      {
        name: 'Nextjslearning',
        url: 'https://www.pfister.ch',
      },
    ],
  });
};
