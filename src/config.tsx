export enum SocialMediaUrlsEnum {
    facebook = "https://www.facebook.com/HashUpIt",
    linkedIn = "https://www.linkedin.com/company/hashupit",
    instagram = "https://www.instagram.com/hashup.it/",
    telegram = "https://t.me/HashUpAnnouncements",
    twitter = "https://twitter.com/HashUp_it",
}

export enum LanguagesEnum {
    en = "en",
    pl = "pl",
    de = "de",
}

export const assetsUrl = (path: string): string => `/assets/${path}`

export const scriptsUrl = (path: string): string => `/scripts/${path}`
