export const PersonnelInfo = Object.freeze({
  NAME: 'Sabrina Guia',
  ROLE: 'Front-end Developer',
  LICENCE: 'B1, B',
});

export const ContactsInfo = Object.freeze({
  PHONE: '+351 962 393 164',
  LOCATION: 'Lisbon, Portugal',
  EMAIL: 'sabrina-guia@hotmail.com',
  GITHUB: 'https://github.com/SabrinaG/curriculum-vitae',
  LINKEDIN: 'https://www.linkedin.com/in/sabrina-guia',
});

export const LanguagesInfo = Object.freeze(['Portuguese', 'English']);

export const HobbiesInfo = Object.freeze(['Music', 'CrossFit', 'Traveling', 'Photography']);

export const SkillsList = Object.freeze({
  HTML5: 'html5',
  REACT: 'react',
  JavaScript: 'javaScript',
  CSS3: 'css3',
});

export const UniversitiiesMap = Object.freeze({
  UNISA: 'Università degli Studi di Salerno',
  UBI: 'Universidade da Beira Interior',
});

export const EntetiesLinks = Object.freeze({
  EDISOFT: 'https://www.edisoft.pt/',
  UNISA: 'https://www.unisa.it/',
  UBI: 'https://www.ubi.pt/',
});

export const ProjectsLinks = Object.freeze({
  ATFM: 'https://www.thalesgroup.com/en/markets/aerospace/air-traffic-management/automation/topsky-flow-manager',
  CleanSeaNet: 'https://portal.emsa.europa.eu/web/csn',
  IPSentinel: 'https://ipsentinel.pt/',
  LSA: 'https://landsaf.ipma.pt/en/',
});

export const backendApi = Object.freeze({
  API_HEADER: 'https://',
  API_IP: 'sabrinaguia.pt',
  API_ENDPOINT: '/api',
  API_ENDPOINT_PROFILE: '/full_profile',
  API_ENDPOINT_EXPEIENCE: '/experience',
  API_ENDPOINT_EDUCATION: '/education',
});

export const API_BASE_URL = backendApi.API_HEADER + backendApi.API_IP + backendApi.API_ENDPOINT;
export const PROFILE_NAME = PersonnelInfo.NAME.toLowerCase().replace(' ', '-');
