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
        endDate: 'present',
        highlights: [],
        position: 'Front-End Developer',
        startDate: '2020-01-31',
        summary: '',
        url: 'https://www.linkedin.com/company/18623506',
        image:
          'https://s.dou.ua/CACHE/images/img/static/companies/Logo__NearShorePartner.ch_mit_Claim__/a390d9d6c37ea5aa1863876041af1748.png',
      },
    ],
    volunteer: [],
    education: [],
    awards: [],
    publications: [],
    skills: [
      {
        name: 'HTML5',
        level: '',
        keywords: [],
        iconClass: 'devicon-html5-plain colored',
      },
      {
        name: 'CSS3',
        level: '',
        keywords: [],
        iconClass: 'devicon-css3-plain colored',
      },
      {
        name: 'JavaScript',
        level: '',
        keywords: [],
        iconClass: 'devicon-javascript-plain colored',
      },

      {
        name: 'TypeScript',
        level: '',
        keywords: [],
        iconClass: 'devicon-typescript-plain colored',
      },
      {
        name: 'React.js',
        level: '',
        keywords: [],
        iconClass: 'devicon-react-original colored',
      },
      {
        name: 'Next.js',
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
        name: 'Nextjslearning',
        url: 'https://nextjslearning.now.sh/',
        image:
          'https://soshace-12d3e.kxcdn.com/wp-content/uploads/2019/10/Getting-Started-with-NextJS.jpg',
      },
    ],
  });
};
