export const GLOBAL_CONTENT_WIDTH_PX: number = 1240
export const GLOBAL_HORIZONTAL_PADDING_PX: number = 15

export const Swatches = {
    background_main: "#101010",
    background_secondary: "#050505",
    primary_color: "#FF3F3F",
    inactive: "#CDCDCD",
    text_main: "#FFFFFF",
    text_secondary: "#ADADAD",
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

export const minHeight = (height: string): string => `@media(min-height: ${height})`
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