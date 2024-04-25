export interface contentNavbarInterface {
  home: string,
  about: string,
  projects: string,
  contact: string,
}
export interface contentInterface {
  navbar: contentNavbarInterface
}
export interface localisedContentInterface {
  en: contentInterface,
  ru: contentInterface,
}