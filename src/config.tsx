export const scriptsUrl = (path: string): string => `/scripts/${path}`
export const assetsUrl = (path: string): string => `/assets/${path}`
export const documentsUrl = (path: string): string => `/documents/${path}`

const translationEN = require("./locales/en/translation.json")
const translationPL = require("./locales/pl/translation.json")
const translationDE = require("./locales/de/translation.json")

// export enum Languages {
// en = "en",
// pl = "pl",
// de = "de",
// }

interface LanguageInterface {
    readonly code: string
    readonly locale: any
}

export const Languages = {
    pl: {
        code: "pl",
        locale: require("./locales/pl/translation.json"),
    },
    en: {
        code: "en",
        locale: require("./locales/en/translation.json"),
    },
    de: {
        code: "de",
        locale: require("./locales/de/translation.json"),
    },
} as const

export const langsOfWhitepaper: string[] = [Languages.en.code, Languages.pl.code]

export const SocialMediaUrls = {
    facebook: "https://www.facebook.com/HashUpIt",
    linkedIn: "https://www.linkedin.com/company/hashupit",
    instagram: "https://www.instagram.com/hashup.it/",
    telegram: "https://t.me/HashUpAnnouncements",
    twitter: "https://twitter.com/HashUp_it",
    discord: "https://discord.gg/ZxwhHb7R9e",
    gitbook: "https://hashup-it.gitbook.io/hashup-it-1/",
} as const

const socialMediaIconUrl = (filename: string): string => assetsUrl(`social-media-icons/${filename}`)
export const SocialMediaIcons = {
    facebook: socialMediaIconUrl("facebook.svg"),
    linkedin: socialMediaIconUrl("linkedin.svg"),
    instagram: socialMediaIconUrl("instagram.svg"),
    telegram: socialMediaIconUrl("telegram.svg"),
    twitter: socialMediaIconUrl("twitter.svg"),
    discord: socialMediaIconUrl("discord.svg"),
    dribble: socialMediaIconUrl("dribble.svg"),
    github: socialMediaIconUrl("github.svg"),
    metamask: socialMediaIconUrl("metamask.svg"),
    wikipedia: socialMediaIconUrl("wikipedia.ico"),
} as const

const brandAssetsUrl = (filename: string): string => assetsUrl(`brand/${filename}`)
export const BrandAssets = {
    logoIcon: brandAssetsUrl("logo-icon.svg"),
    logo: brandAssetsUrl("logo.svg"),
} as const

export const Documents = {
    termsAndConditions: documentsUrl("Hash_Token_Terms_of_Use.pdf"),
    airdropTermsOfUse: documentsUrl("Hash_Token_Airdrop_Terms_and_Conditions.pdf"),
    privacyPolicy: documentsUrl("Data_Protection_Policy.pdf"),
} as const

export enum CartridgeType {
    green = "green",
    gold = "gold",
    blue = "blue",
    gray = "gray",
    red = "red",
}

export enum CartridgeColor {
    green = "#6AAD38",
    gold = "#BEA379",
    blue = "#468CF4",
    gray = "#9D9D9D",
    red = "#FF3F3F",
}
