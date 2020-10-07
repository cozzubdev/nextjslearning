export interface Project {
  name: string;
  url: string;
}
export interface Language {
  language: string;
  fluency: string;
}
export interface Skill {
  name: string;
  level: string;
  keywords: [];
}
export interface Work {
  name: string;
  endDate: Date;
  highlights: [];
  position: string;
  startDate: Date;
  summary: string;
  url: string;
}
export interface Basics {
  name: string;
  birthdate: string;
  label: string;
  image: string;
  email: string;
  phone: number;
  url: string;
  location: {
    address: string;
    postalCode: number;
    city: string;
    countryCode: string;
    region: string;
  };
}

export interface Profile {
  basics: Basics;
  work: Work[];
  skills: Skill[];
  languages: Language[];
  projects: Project[];
}
