export const GLOBAL_CONTENT_WIDTH_PX: number = 1240

export const Swatches = {
    background_main: "#0A0A08",
    primary_color: "#FF3F3F",
    green_cartridge_color: "#6AAD38",
    gold_cartridge_color: "#BEA379",
    read_cartridge_color: "#D65A5A",
    inactive: "#CDCDCD",
    primary_darker: "#EE0031",
    text_main: "#FFFFFF",
    text_secondary: "#ADADAD",
    text_tertiary: "#969DB2",
    cartridge_target_outline_color: "#989898",
} as const

const size = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopM: "1320px",
    laptopL: "1440px",
    desktop: "1920px",
    desktopL: "2560px",
} as const

export const maxWidth = (width: string): string => `@media(max-width: ${width})`

export const MediaQuery = {
    mobileS: maxWidth(size.mobileS),
    mobileM: maxWidth(size.mobileM),
    mobileL: maxWidth(size.mobileL),
    tablet: maxWidth(size.tablet),
    laptop: maxWidth(size.laptop),
    laptopM: maxWidth(size.laptopM),
    laptopL: maxWidth(size.laptopL),
    desktop: maxWidth(size.desktop),
    desktopL: maxWidth(size.desktopL),
} as const

export const GlobalHorizontalPadding = {
    [MediaQuery.desktop]: "93px",
    [MediaQuery.laptop]: "45px",
    [MediaQuery.laptopL]: "60px",
    [MediaQuery.tablet]: "60px",
    [MediaQuery.mobileL]: "23px",
}
