import facebookSvg from "/public/assets/social-media-icons/facebook.svg"
import twitterSvg from "/public/assets/social-media-icons/twitter.svg"
import wikipediaSvg from "/public/assets/social-media-icons/wikipedia.svg"
import discordSvg from "/public/assets/social-media-icons/discord.svg"
import linkedinSvg from "/public/assets/social-media-icons/linkedin.svg"
import telegramSvg from "/public/assets/social-media-icons/telegram.svg"
import dribbleSvg from "/public/assets/social-media-icons/dribble.svg"
import githubSvg from "/public/assets/social-media-icons/github.svg"
import metamaskSvg from "/public/assets/social-media-icons/metamask.svg"
import instagramSvg from "/public/assets/social-media-icons/instagram.svg"

export const scriptsUrl = (path: string): string => `/scripts/${path}`
export const assetsUrl = (path: string): string => `/assets/${path}`
export const documentsUrl = (path: string): string => `/documents/${path}`

export const Languages = {
    pl: {
        code: "pl",
        locale: require("./locales/pl/translation.json"),
    },
    en: {
        code: "en",
        locale: require("./locales/en/translation.json"),
    },
    // de: {
    // code: "de",
    // locale: require("./locales/de/translation.json"),
    // },
} as const

export const langsOfWhitepaper: string[] = [Languages.en.code, Languages.pl.code]

export const SocialMediaUrls = {
    facebook: "https://www.facebook.com/HashUpIt",
    linkedIn: "https://www.linkedin.com/company/hashupit",
    instagram: "https://www.instagram.com/hashup.it/",
    telegram: "https://t.me/HashUpChat",
    twitter: "https://twitter.com/HashUp_it",
    discord: "https://discord.gg/ZxwhHb7R9e",
    gitbook: "https://hashup-it.gitbook.io/hashup-it-1/",
    jankowskiTelegram: "https://t.me/SzymonJankowski",
} as const

export const SocialMediaIcons = {
    facebook: facebookSvg,
    linkedin: linkedinSvg,
    instagram: instagramSvg,
    telegram: telegramSvg,
    twitter: twitterSvg,
    discord: discordSvg,
    dribble: dribbleSvg,
    github: githubSvg,
    metamask: metamaskSvg,
    wikipedia: wikipediaSvg,
} as const

const brandAssetsUrl = (filename: string): string => assetsUrl(`brand/${filename}`)
export const BrandAssets = {
    logoIcon: brandAssetsUrl("logo-icon.svg"),
    logo: brandAssetsUrl("logo.svg"),
} as const

export const Documents = {
    termsAndConditions: "https://cdn.hashup.it/landing/HashUp.IT_-_Terms_And_Contitions.pdf",
    // airdropTermsOfUse: "https://cdn.hashup.it/landing/Hash_Token_Airdrop_Terms_and_Conditions.pdf",
    privacyPolicy: "https://cdn.hashup.it/landing/HashUp.IT_-_Data_Protection_Policy.pdf",
    lightpaper: "https://cdn.hashup.it/landing/lightpaper.pdf",
    pitchdeck: "https://cdn.hashup.it/landing/HashUp_PitchDeck.pdf",
    whitepaperPL: "https://cdn.hashup.it/hashup-whitepaper-pl.pdf",
    whitepaperEN: "https://cdn.hashup.it/hashup-whitepaper-eng.pdf",
} as const

export const CompanyInfo = {
    email: "hello@hashup.it",
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
