export const scriptsUrl = (path: string): string => `/scripts/${path}`
export const assetsUrl = (path: string): string => `/assets/${path}`

export const Languages = {
    en: "en",
    pl: "pl",
    de: "de",
} as const

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
