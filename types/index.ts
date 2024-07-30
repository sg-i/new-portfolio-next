export interface localisedContentInterface {
  en: contentInterface,
  ru: contentInterface,
}


export interface contentInterface {
  navbar: contentNavbarInterface,
  bio: contentBioInterface,
  about: contentAboutInterface,
  portfolio: contentPortfolioInterface,
  projects: projectInterface[]
}


export interface contentNavbarInterface {
  home: string,
  about: string,
  projects: string,
  contact: string,
}
export interface contentBioInterface{
  title: string,
  description: string,
  techStack: string
}


interface contentAboutElementInterface{
  title: string,
  description: string
}
export interface contentAboutInterface{
  title: string,
  quote: string,
  description: string,
  education: contentAboutElementInterface,
  location: contentAboutElementInterface,
  languages: contentAboutElementInterface
}

export interface contentPortfolioInterface{
  description: string,
  codeButton: string,
  liveDemoButton: string
}

interface webImageDataInterface{
  original: string, 
  thumbnail: string
}
export interface projectInterface{
  title: string,
  description: string,
  stack: string[],
  codeLink: string,
  demoLink: string,
  images: webImageDataInterface[]
}
